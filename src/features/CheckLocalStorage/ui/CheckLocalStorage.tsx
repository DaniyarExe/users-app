import axios from "axios";
import { Users } from "@/entities";

const checkLocalStorage = async (setUserList: (users: Users[]) => void) => {
  const usersData = localStorage.getItem('users');
  if (!usersData) {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const usersData: Users[] = res.data;
      setUserList(usersData);
      localStorage.setItem('users', JSON.stringify(usersData));
    } catch (error) {
      console.error(error);
    }
  }
};

export default checkLocalStorage;
