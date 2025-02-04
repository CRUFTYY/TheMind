The Mind 🃏
Version License

The Mind es una implementación en línea del famoso juego cooperativo "The Mind" . Los jugadores deben trabajar juntos para jugar cartas en orden ascendente sin comunicarse verbalmente. Este proyecto utiliza tecnologías modernas como Node.js , Socket.IO y HTML/CSS/JavaScript para proporcionar una experiencia multijugador en tiempo real.

Desarrollado por : CRUFTYY
Repositorio : https://github.com/CRUFTYY/TheMind 

Tabla de Contenidos
Características
Requisitos
Instalación
Uso
Estructura del Proyecto
Contribuciones
Licencia
Contacto
Características
Multijugador en tiempo real : Juega con amigos en diferentes dispositivos a través de una conexión en línea.
Sincronización perfecta : Todos los jugadores están sincronizados en el mismo estado del juego.
Creador de sala : El creador puede configurar la cantidad de cartas y decidir cuándo iniciar la partida.
Interfaz intuitiva : Una interfaz simple y fácil de usar para una experiencia fluida.
Validaciones robustas : Manejo de errores para evitar problemas como partidas automáticas o desconexiones inesperadas.
Requisitos
Para ejecutar este proyecto localmente, necesitarás:

Node.js (versión 16 o superior).
NPM (viene incluido con Node.js).
Un navegador moderno (Chrome, Firefox, Edge, etc.).
Instalación
Clona el repositorio :
bash
Copy
1
2
git clone https://github.com/CRUFTYY/TheMind.git
cd TheMind
Instala las dependencias :
Asegúrate de estar en la carpeta server y ejecuta:
bash
Copy
1
npm install
Inicia el servidor :
Desde la carpeta server, ejecuta:
bash
Copy
1
node server.js
Abre el cliente :
Abre el archivo index.html ubicado en la carpeta client en tu navegador.
También puedes servirlo usando un servidor HTTP local si lo prefieres:
bash
Copy
1
npx serve client
Uso
Crear una sala :
Haz clic en "Crear Sala". Se generará automáticamente un código hexadecimal de 4 dígitos.
Comparte este código con tus amigos para que se unan.
Unirse a una sala :
Ingresa el código de sala en otro navegador o dispositivo y haz clic en "Unirse a Sala".
Configurar la partida :
El creador de la sala selecciona la cantidad de cartas antes de iniciar la partida.
Haz clic en "Iniciar Partida" cuando todos los jugadores estén listos.
Jugar :
Las cartas se mostrarán como botones bajo "Tus Cartas".
Juega tus cartas en orden ascendente cooperando con tus compañeros.
Estructura del Proyecto
El proyecto está organizado en dos carpetas principales. Puedes ver la estructura completa en el repositorio: https://github.com/CRUFTYY/TheMind .

Copy
1
2
3
4
5
6
7
8
9
10
TheMind/
├── client/          # Archivos del cliente (frontend)
│   ├── index.html   # Interfaz principal del juego
│   └── assets/      # Archivos adicionales (CSS, imágenes, etc.)
│
├── server/          # Archivos del servidor (backend)
│   ├── server.js    # Lógica del servidor con Socket.IO
│   └── package.json # Dependencias del servidor
│
└── README.md        # Documentación del proyecto
Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m "Añadir nueva funcionalidad").
Sube tus cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request explicando tus cambios.
Licencia
Este proyecto está bajo la licencia MIT . Consulta el archivo LICENSE para más detalles.

Derechos de autor : © 2023 CRUFTYY. Todos los derechos reservados. 

Contacto
Si tienes preguntas o sugerencias, no dudes en contactarme:

GitHub : @CRUFTYY
Discord : @crufty
Correo electrónico : crufty01@gmail.com
¡Gracias por visitar este repositorio! 🎉 Espero que disfrutes jugando y colaborando en The Mind . 😊