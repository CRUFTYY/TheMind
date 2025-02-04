// server.js - Backend para el juego "The Mind" usando Node.js y Socket.IO

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

// Almacenamiento temporal de salas y estados del juego
const rooms = {};

// Función para generar cartas aleatorias
function generateCards(numPlayers, totalCards) {
  const cards = [];
  while (cards.length < numPlayers * totalCards) {
    const card = Math.floor(Math.random() * 100) + 1;
    if (!cards.includes(card)) cards.push(card);
  }
  return cards;
}

// Función para repartir cartas entre jugadores
function dealCards(cards, numPlayers) {
  const hands = Array.from({ length: numPlayers }, () => []);
  cards.forEach((card, index) => {
    hands[index % numPlayers].push(card);
  });
  return hands.map(hand => hand.sort((a, b) => a - b));
}

// Lógica del servidor
io.on('connection', (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  // Unirse o crear una sala
  socket.on('join-room', (roomCode) => {
    let room = rooms[roomCode];
    if (!room) {
      room = {
        code: roomCode,
        players: [],
        playerHands: {}, // Manos de los jugadores
        gameState: { cardsPlayed: [] },
        settings: { totalCards: 3 }, // Configuración inicial
      };
      rooms[roomCode] = room;
    }

    const playerIndex = room.players.push(socket.id) - 1;
    socket.join(roomCode);

    // Notificar a todos los jugadores que se ha unido alguien
    io.to(roomCode).emit('update-state', room.gameState);
  });

  // Iniciar la partida
  socket.on('start-game', ({ roomCode, totalCards }) => {
    const room = rooms[roomCode];
    if (!room) return;

    room.settings.totalCards = totalCards;
    startGame(roomCode);
  });

  // Jugar una carta
  socket.on('play-card', ({ roomCode, card }) => {
    const room = rooms[roomCode];
    if (!room) return;

    const { cardsPlayed } = room.gameState;

    // Obtener todas las cartas disponibles en las manos de los jugadores
    const allPlayersCards = Object.values(room.playerHands).flat();

    // Encontrar la carta más baja disponible
    const lowestCard = Math.min(...allPlayersCards);

    // Verificar si la carta jugada es válida
    if (card > lowestCard) {
      console.log(`Carta inválida jugada: ${card}. La carta más baja disponible es: ${lowestCard}`);
      io.to(roomCode).emit('game-over', false); // Perdieron
      return;
    }

    // Agregar la carta jugada al historial de cartas jugadas
    cardsPlayed.push(card);

    // Eliminar la carta jugada de la mano del jugador
    room.playerHands[socket.id] = room.playerHands[socket.id].filter(c => c !== card);

    // Verificar si las cartas están en orden ascendente
    const isAscending = cardsPlayed.every((card, i) => i === 0 || card > cardsPlayed[i - 1]);
    if (!isAscending) {
      console.log(`Cartas no están en orden ascendente: ${cardsPlayed}`);
      io.to(roomCode).emit('game-over', false); // Perdieron
      return;
    }

    // Actualizar estado del juego
    room.gameState.cardsPlayed = cardsPlayed;
    io.to(roomCode).emit('update-state', room.gameState);

    // Si todas las cartas fueron jugadas, ganaron
    if (cardsPlayed.length === room.players.length * room.settings.totalCards) {
      console.log("¡Todos los jugadores ganaron!");
      io.to(roomCode).emit('game-over', true); // Ganaron
    }
  });

  // Reiniciar la partida
  socket.on('restart-game', ({ roomCode, totalCards }) => {
    const room = rooms[roomCode];
    if (!room) return;

    room.settings.totalCards = totalCards;
    startGame(roomCode);
  });

  // Manejar desconexión
  socket.on('disconnect', () => {
    console.log(`Usuario desconectado: ${socket.id}`);
    for (const roomCode in rooms) {
      const room = rooms[roomCode];
      const playerIndex = room.players.indexOf(socket.id);
      if (playerIndex !== -1) {
        room.players.splice(playerIndex, 1);
        delete room.playerHands[socket.id];
        if (room.players.length < 2) {
          delete rooms[roomCode];
        }
      }
    }
  });
});

// Iniciar un nuevo nivel del juego
function startGame(roomCode) {
  const room = rooms[roomCode];
  if (!room) return;

  const { players, settings } = room;
  const cards = generateCards(players.length, settings.totalCards);
  const hands = dealCards(cards, players.length);

  // Repartir cartas a los jugadores
  players.forEach((playerId, index) => {
    room.playerHands[playerId] = hands[index];
    io.to(playerId).emit('deal-cards', hands[index]);
  });

  // Reiniciar cartas jugadas
  room.gameState.cardsPlayed = [];
  io.to(roomCode).emit('update-state', room.gameState);
}

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});