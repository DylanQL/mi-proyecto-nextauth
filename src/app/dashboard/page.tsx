"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function DashboardPage(){
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return(
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">Dashboard</h1>
        <div className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">
          Área Protegida
        </div>
      </div>
      
      {session?.user && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              {session.user.image ? (
                <img 
                  src={session.user.image} 
                  alt="Foto de perfil" 
                  className="w-16 h-16 rounded-full border-2 border-indigo-500"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold">
                  {session.user.name?.charAt(0) || session.user.email?.charAt(0) || '?'}
                </div>
              )}
              <div>
                <h2 className="text-2xl font-semibold dark:text-white">
                  ¡Bienvenido, {session.user.name || 'Usuario'}!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {session.user.email}
                </p>
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                  Sesión Activa
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Información de Autenticación
            </h3>
            <dl className="grid grid-cols-1 gap-3 mt-4">
              <div className="sm:grid sm:grid-cols-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">ID:</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-300 sm:mt-0">{session.user.id || 'No disponible'}</dd>
              </div>
              
              <div className="sm:grid sm:grid-cols-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Proveedor:</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-300 sm:mt-0">
                  {session.user.image ? 'Google' : 'Credenciales'}
                </dd>
              </div>
              
              <div className="sm:grid sm:grid-cols-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Sesión expira:</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-300 sm:mt-0">En 30 días</dd>
              </div>
            </dl>
          </div>
          
          <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Detalles completos de la sesión
            </h3>
            <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md text-sm overflow-auto text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage
