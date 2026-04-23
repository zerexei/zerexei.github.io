import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/utils/database";


export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user); // user object or null
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    isAuth: !!user,
    loading,
  };
}
