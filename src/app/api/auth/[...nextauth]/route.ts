// Importa la función NextAuth, que se utiliza para manejar la autenticación en Next.js
import NextAuth from "next-auth";

// Importa el proveedor de autenticación de Google para NextAuth
import GoogleProvider from "next-auth/providers/google";

// Configura NextAuth con los proveedores de autenticación deseados
const handler = NextAuth({
  providers: [
    // Configuración del proveedor de Google
    GoogleProvider({
      // ID del cliente de Google OAuth, almacenado en variables de entorno
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      
      // Secreto del cliente de Google OAuth, también en variables de entorno
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

// Exporta el handler para los métodos GET y POST
// Esto permite que Next.js maneje las solicitudes de autenticación con NextAuth
export { handler as GET, handler as POST };
