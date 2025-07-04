import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("usuarios");
    return storedUsers ? JSON.parse(storedUsers) : []; 
  });

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(users)); 
  }, [users]);

  const addUser = (newUserData) => {
  const newUserWithId = {
    ...newUserData,
    id: newUserData.id || `usr${Date.now()}_${Math.random().toString(16).slice(2)}`,
    nome: newUserData.nome?.trim() || "Usuário sem nome",
    funcao: newUserData.funcao?.trim() || "Função não definida", 
    createdAt: new Date(),
    active: true,
  };
  const updatedUsers = [newUserWithId, ...users];
  setUsers(updatedUsers);
  localStorage.setItem("usuarios", JSON.stringify(updatedUsers)); 
};

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser, lastModified: new Date() } : user
      )
    );
    localStorage.setItem("usuarios", JSON.stringify(users)); 
  };

  const toggleUserStatus = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === userId ? { ...user, active: !user.active } : user
      );
      localStorage.setItem("usuarios", JSON.stringify(updatedUsers)); 
      return updatedUsers;
    });
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      localStorage.setItem("usuarios", JSON.stringify(updatedUsers)); 
      return updatedUsers;
    });
  };

  return (
    <UserContext.Provider value={{
      users,
      addUser,
      updateUser,
      toggleUserStatus, 
      deleteUser
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};