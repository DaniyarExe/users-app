import { Users } from "@/entities";
import axios from "axios";
import { useEffect, useState } from "react";

const checkLocalStorage = () => {
  const [users, setUsers] = useState<Users[]>([]);

  const checkUsers = (): Users[] | null => {
    const usersData = localStorage.getItem("users");
    if (usersData) {
      return JSON.parse(usersData);
    } else {
      return null;
    }
  };

const getUserWithApi = async (): Promise<void> {
  try{
    const usersData = localStorage.getItem('users')
    if(!usersData || JSON.parse(usersData).length === 0) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const UsersInText: Users[] = res.data;
      setUsers(UsersInText);
      localStorage.setItem('/users', JSON.stringify(UsersInText));
    } else {
      console.log("Error");
    }
  } catch(error) {
    console.log(error);
    
  }
}

useEffect(() => {
  const savedUser = checkUsers()
  if (savedUser !== null) {
    setUsers(savedUser)
  }else {
    getUserWithApi();
  }
}, [])

  return { users, };
};
export default checkLocalStorage;
