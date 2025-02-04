# The Mind 🃏

## Version License
The Mind es una implementación del juego cooperativo "The Mind". Los jugadores deben trabajar juntos para jugar cartas en orden ascendente sin comunicarse verbalmente. Este proyecto utiliza tecnologías como Node.js, Socket.IO y HTML/CSS/JavaScript para proporcionar una experiencia multijugador en tiempo real.

**Desarrollado por:** CRUFTYY  
**Repositorio:** [TheMind](https://github.com/CRUFTYY/TheMind)

## Tabla de Contenidos
- [Características](#caracteristicas)
- [Requisitos](#requisitos)
- [Instalación](#instalacion)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Características
- **Multijugador en tiempo real:** Jugá con amigos en diferentes dispositivos a través de una conexión en línea.
- **Sincronización perfecta:** Todos los jugadores están sincronizados en el mismo estado del juego.
- **Creador de sala:** El creador puede configurar la cantidad de cartas y decidir cuándo iniciar la partida.
- **Interfaz intuitiva:** Una interfaz simple y fácil de usar para una experiencia fluida.

## Requisitos
Para ejecutar este proyecto localmente, vas a necesitar:
- Node.js (versión 16 o superior).
- NPM (viene incluido con Node.js).
- Un navegador (Chrome, Firefox, Edge, etc.).

## Instalación
### Cloná el repositorio:
```bash
git clone https://github.com/CRUFTYY/TheMind.git
cd TheMind
```

### Instalá las dependencias:
Asegurate de estar en la carpeta `server` y ejecuta:
```bash
npm install
```

### Iniciá el servidor:
Desde la carpeta `server`, ejecutá:
```bash
node server.js
```

### Abrí el cliente:
Abrí el archivo `index.html` ubicado en la carpeta `client` en tu browser.

También puedes servirlo usando un servidor HTTP local si lo prefieres:
```bash
npx serve client
```

## Uso
### Crear una sala:
1. Hacé click en "Crear Sala". Se generará automáticamente un código hexadecimal de 4 dígitos.
2. Compartí este código con tus amigos para que se unan.

### Unirse a una sala:
1. Ingresa el código de sala en otro navegador o dispositivo y haz clic en "Unirse a Sala".

### Configurar la partida:
1. El creador de la sala selecciona la cantidad de cartas antes de iniciar la partida.
2. Hacé click en "Iniciar Partida" cuando todos los jugadores estén listos.

### Jugar:
1. Las cartas se mostrarán como botones bajo "Tus Cartas".
2. Jugá tus cartas en orden ascendente cooperando con tus compañeros.

## Estructura del Proyecto
El proyecto está organizado en dos carpetas principales. Puedes ver la estructura completa en el repositorio: [TheMind](https://github.com/CRUFTYY/TheMind).
```bash
TheMind/
├── client/          # frontend
│   ├── index.html   # 
│   └── assets/      # Archivos adicionales
│
├── server/          # Archivos del servidor (backend)
│   ├── server.js    # Lógica del servidor con Socket.IO
│   └── package.json # Dependencias del servidor
│
└── README.md        # Documentación del proyecto
```

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

**Derechos de autor:** © 2025 CRUFTYY. Todos los derechos reservados.

## Contacto
Si tenés preguntas o sugerencias, no dudés en contactarme:
- **GitHub:** [@CRUFTYY](https://github.com/CRUFTYY)
- **Discord:** [@crufty](https://discord.com/users/844310623706021969)
- **Correo electrónico:** crufty01@gmail.com

Gracias por visitar mi proyecto de The Mind 🎉

