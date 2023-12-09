# React + Vite

# My Chat App

## Descripción

My Chat App es una aplicación de chat simple construida con React y Socket.IO. Permite a los usuarios enviar mensajes y ver mensajes antiguos en tiempo real.

## Configuración

### Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

### Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/my-chat-app.git
   cd my-chat-app
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

### Configuración de variables de entorno

Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:

```env
REACT_APP_API_URL=https://backend-react-1kcz.onrender.com/api

```

Asegúrate de tener el backend correspondiente en la URL proporcionada.

Ejecución
Para iniciar la aplicación en modo de desarrollo:

bash
Copy code
npm run dev
Visita http://localhost:3000 en tu navegador.

Construcción
Para construir la aplicación para producción:

bash
Copy code
npm run build
Scripts
dev: Inicia la aplicación en modo de desarrollo.
build: Construye la aplicación para producción.
lint: Lintea el código usando ESLint.
preview: Vista previa de la aplicación construida.
Dependencias
axios: Cliente HTTP para realizar peticiones.
react: Biblioteca de JavaScript para construir interfaces de usuario.
react-dom: Paquete específico para la manipulación del DOM en aplicaciones React.
react-random-avatars: Generador de avatares aleatorios para React.
react-router-dom: Navegación declarativa para React.
socket.io-client: Cliente de Socket.IO para JavaScript.
Desarrollo
Esta aplicación se creó utilizando Vite como entorno de desarrollo y bundler.

Licencia
Este proyecto está bajo la licencia MIT - consulta el archivo LICENSE para más detalles.
