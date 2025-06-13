# Sistema de Autenticación con NextAuth.js

Este proyecto implementa un sis## Estructura del proyecto

```
/src
  /app
    /api
      /auth
        /[...nextauth]  # Configuración de NextAuth.js
      /register         # API para registro de usuarios
    /login              # Página de inicio de sesión
    /register           # Página de registro
    /dashboard          # Página protegida de dashboard
    /Providers.tsx      # Proveedores de contexto
    /layout.tsx         # Layout principal con Navbar
    /page.tsx           # Página de inicio
  /components
    /Navbar.tsx         # Barra de navegación
  /lib
    /auth              # Funciones de autenticación
    /prisma.ts         # Cliente de Prisma
  /types              # Tipos personalizados
/prisma
  /schema.prisma      # Modelo de datos Prisma
```

## Rutas disponibles

- `/`: Página de inicio
- `/login`: Inicio de sesión
- `/register`: Registro de nuevo usuario
- `/dashboard`: Panel de usuario (protegido)
- `/api/auth/...`: Endpoints de NextAuth
- `/api/register`: Endpoint para registro

## Características del sistema de autenticación

### Seguridad

- Contraseñas hasheadas con bcrypt
- Autenticación basada en JWT
- Protección de rutas mediante middleware
- Validación de datos en el cliente y servidor

### Flujo de usuario

1. **Registro**: Los usuarios pueden crear una cuenta con email y contraseña
2. **Inicio de sesión**: Mediante credenciales o Google
3. **Acceso a rutas protegidas**: Solo usuarios autenticados
4. **Cierre de sesión**: Destrucción segura de la sesión

## Personalización

Puedes personalizar este proyecto según tus necesidades:

- Añadir proveedores adicionales (GitHub, Facebook, etc.)
- Extender el esquema de la base de datos
- Añadir campos adicionales al formulario de registro
- Implementar características como verificación de email

## Licencia

Este proyecto está bajo la Licencia MIT. autenticación usando Next.js, NextAuth.js, SQLite con Prisma y JWT para la gestión de sesiones. Incluye múltiples proveedores de autenticación (credenciales y Google OAuth) y rutas protegidas.

## Características

- 🔐 **Autenticación múltiple**: Soporte para inicio de sesión con email/contraseña y Google OAuth
- 💾 **Base de datos SQLite**: Almacenamiento local de usuarios utilizando Prisma como ORM
- 🔒 **Middleware de protección**: Rutas protegidas que solo usuarios autenticados pueden acceder
- 🌓 **Modo oscuro/claro**: Interfaz adaptativa que responde a las preferencias del usuario
- 📱 **Diseño responsive**: Interfaz optimizada para dispositivos móviles y escritorio
- 🔄 **JWT Sessions**: Gestión de sesiones mediante JSON Web Tokens

## Tecnologías utilizadas

- **Next.js**: Framework de React para el frontend y APIs
- **NextAuth.js**: Solución completa de autenticación
- **Prisma**: ORM para interactuar con la base de datos SQLite
- **Tailwind CSS**: Framework de utilidades CSS para el diseño
- **bcryptjs**: Para el hash seguro de contraseñas

## Comenzando

### Prerrequisitos

- Node.js 18.0.0 o superior
- npm o yarn

### Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd mi-proyecto-nextauth
```

2. Instala las dependencias:

```bash
npm install
# o
yarn install
```

3. Configura las variables de entorno:
   
Crea un archivo `.env.local` con las siguientes variables:

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secreto-seguro-aqui"

# Para autenticación con Google (opcional)
GOOGLE_CLIENT_ID="tu-google-client-id"
GOOGLE_CLIENT_SECRET="tu-google-client-secret"
```

4. Ejecuta las migraciones de Prisma:

```bash
npx prisma migrate dev --name init
```

5. Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
