# 🧑‍💻 Proyecto de Ejemplo con Arquitectura Limpia

## 📖 Descripción

Este es un proyecto de ejemplo que demuestra cómo aplicar buenas prácticas y una arquitectura limpia en el desarrollo de software. El proyecto está construido con Node.js y TypeScript y sigue los principios SOLID, Clean Code y Clean Architecture. También incluye pruebas automatizadas con Jest.

## 🛠 Instalación

Para clonar y ejecutar este proyecto, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-proyecto.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd tu-proyecto
    ```

3. Instala las dependencias necesarias:
    ```sh
    npm install
    ```

4. Construye el proyecto:
    ```sh
    npm run build
    ```

5. Ejecuta el proyecto:
    ```sh
    npm start
    ```

## 🚀 Uso

Para usar este proyecto, sigue los pasos a continuación:

1. Descripción de cómo usar el proyecto.
2. Ejemplos de comandos o código.

## 🏗️ Arquitectura

Este proyecto sigue la arquitectura limpia y se organiza de la siguiente manera:

- **🔧 config/plugins**: Contiene los plugins y configuraciones.
  - `args.plugin.ts`: Plugin para manejar argumentos.
  - `args.plugin.test.ts`: Pruebas para el plugin de argumentos.
- **📂 domain/use-cases**: Contiene los casos de uso del dominio.
  - `create-table.use-case.ts`: Caso de uso para crear una tabla.
  - `create-table.use-case.test.ts`: Pruebas para el caso de uso de crear una tabla.
  - `save-file.use-case.ts`: Caso de uso para guardar un archivo.
  - `save-file.use-case.test.ts`: Pruebas para el caso de uso de guardar un archivo.
- **🎨 presentation**: Contiene los controladores y la lógica de la interfaz de usuario.
  - `server-app.ts`: Lógica principal del servidor.
  - `server-app.test.ts`: Pruebas para la lógica del servidor.
- **📝 app.logic.ts**: Lógica de la aplicación y el punto de partida del proyecto. Este archivo fue la base para aplicar código limpio y una buena arquitectura.
- **🔍 app.ts**: Punto de entrada de la aplicación.
- **✅ app.test.ts**: Pruebas para el punto de entrada de la aplicación.

## 📂 Estructura de Carpetas

```plaintext
project
├── node_modules
├── src
│   ├── config
│   │   └── plugins
│   │       ├── args.plugin.test.ts
│   │       └── args.plugin.ts
│   ├── domain
│   │   └── use-cases
│   │       ├── create-table.use-case.test.ts
│   │       ├── create-table.use-case.ts
│   │       ├── save-file.use-case.test.ts
│   │       └── save-file.use-case.ts
│   ├── presentation
│   │   ├── server-app.test.ts
│   │   └── server-app.ts
│   ├── app.logic.ts
│   ├── app.test.ts
│   └── app.ts
├── .gitignore
├── jest.config.ts
├── nodemon.json
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
