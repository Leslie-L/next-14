# Fake E-commerce "Future world"

Este proyecto es una tienda ficticia que vende productos futuristas. Permite a los usuarios realizar compras, registrarse, ver sus órdenes y recibir ayuda a través de un chatbot. La aplicación se desarrolló utilizando Next.js 14, React, TypeScript, CSS, Supabase y Google Gemini para el chatbot.
[Link de proyecto](https://next-14-adxc.vercel.app)
## Origen del Proyecto

Este proyecto se basa en el curso de Next.js de [Platzi](https://platzi.com/). El proyecto original del curso estaba hecho con Shopify y la inteligencia artificial de OpenAI. Sin embargo, debido a consideraciones de costos, se realizaron modificaciones para utilizar Supabase y Google Gemini en lugar de Shopify y OpenAI.


## Características

- **Compra de productos:** Los usuarios pueden explorar y comprar productos futuristas desde la tienda.
- **Registro de usuarios:** Los usuarios pueden registrarse para crear una cuenta y tener una experiencia personalizada.
- **Visualización de órdenes:** Los usuarios pueden ver el historial de sus órdenes realizadas.
- **Chatbot de asistencia:** Integración de Google Gemini para proporcionar ayuda y respuestas a preguntas frecuentes.

## Stack Tecnológico

- **Next.js 14:** Utilizado como el framework principal para la construcción de la aplicación.
- **React:** Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **TypeScript:** Proporciona tipado estático para mejorar la robustez del código.
- **CSS:** Estilos para la presentación y diseño de la aplicación.
- **Supabase:** Base de datos utilizada para gestionar la información del usuario y las órdenes.
- **Google Gemini:** Plataforma de inteligencia artificial utilizada para implementar un chatbot de asistencia.

## Configuración del Proyecto

1. **Instalación de Dependencias:**
```bash
   npm install
```

2. **Configuración de Supabase:**
- Crea una cuenta en Supabase y configura tu base de datos.
- Actualiza las credenciales en el archivo .env

3. **Configuración de Google Gemini:**
- Crea un api key en https://ai.google.dev/.
- Actualiza las credenciales en el archivo .en.

3. **Ejecucion del proyecto**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre el siguiente link [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.
