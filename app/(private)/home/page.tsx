"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button/button"
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { MAX_ITEMS_PER_PAGE, USERS_PER_PAGE } from "@/lib/constants";
import { getUsers } from "@/lib/api/users";
import Image from "next/image";

type User = {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  location: { country: string };
  picture: { large: string };
};

const Home = () => {
	const router = useRouter();
  const searchParams = useSearchParams();
  const { token } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const page = parseInt(searchParams.get("page") || "1", 10);
  // const start = (page - 1) * USERS_PER_PAGE;
  // const end = start + USERS_PER_PAGE;


  useEffect(() => {
    if (!token) {
      router.replace("/login");
      return;
    }

    
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers(page); // 👈 solo trae 100 usuarios de la página actual
      setUsers(data);
    } catch (error) {
      alert("Error: " + error);
    } finally {
      setLoading(false);
    }
  };

    fetchUsers();
  }, [token, router, page]);

  const totalPages = Math.ceil(MAX_ITEMS_PER_PAGE / USERS_PER_PAGE);

  const goToPage = (newPage: number) => {
    router.push(`/home?page=${newPage}`);
  };

  if (loading) {
    return <LoadingSpinner message="Cargando usuarios..." />;
  }

  // const paginatedUsers = users.slice(start, end);

  return (
    <div className="min-h-screen bg-lavender p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-purple">Usuarios Registrados</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <div key={user.login.uuid} className="bg-white p-4 rounded shadow flex flex-col items-center">
            <Image
              src={user?.picture?.large || ""}
              alt={`${user.name.first} ${user.name.last}`}
              width={96}
              height={96} 
              className="rounded-full object-cover mb-3"
            />
            <h2 className="font-semibold text-purple text-lg text-center">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-sm text-gray-600 text-center">{user.email}</p>
            <p className="text-xs text-gray-500">{user.location.country}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
        >
          Anterior
        </Button>
        <span className="text-sm text-gray-700 pt-2">
          Página {page} de {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Home;
