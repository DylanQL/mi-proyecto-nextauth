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
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {session?.user && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Bienvenido, {session.user.name}!</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="font-medium w-32">Email:</span>
              <span className="text-gray-700">{session.user.email}</span>
            </div>
            
            {session.user.image && (
              <div className="mt-4">
                <img 
                  src={session.user.image} 
                  alt="Foto de perfil" 
                  className="w-20 h-20 rounded-full"
                />
              </div>
            )}
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">Información de la sesión:</h3>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage
