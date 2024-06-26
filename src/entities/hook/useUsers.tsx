import { useState, useEffect } from 'react';
import { Users } from '../model/types';

const useUsers = () => {
  const [userList, setUserList] = useState<Users[]>([]);

  const editUser = (updUser: Users) => {
    const updatedUserList = userList.map((user) => (user.id === updUser.id ? updUser : user));
    setUserList(updatedUserList);
    localStorage.setItem('users', JSON.stringify(updatedUserList));
  };

  const deleteUser = (userId: number): void => {
    const updatedUserList = userList.filter((user) => user.id !== userId);
    setUserList(updatedUserList);
    localStorage.setItem('users', JSON.stringify(updatedUserList));
  };
  useEffect(() => {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      setUserList(JSON.parse(usersData));
    }
    console.log(usersData);
  }, []);

  return { userList, editUser, deleteUser, setUserList };
};

export default useUsers;
