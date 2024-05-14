import { Users } from "@/entities";
import axios from "axios";
import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [userList, setUserList] = useState<Users[]>([]);

  const getData = (): Users[] | null => {
    const usersData = localStorage.getItem("users");
    if (usersData) {
      return JSON.parse(usersData);
    } else {
      return null;
    }
  };

  const deleteData = (userId: number): void => {
    setUserList((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    const updatedUsersData = userList.filter((user) => user.id !== userId);
    localStorage.setItem("users", JSON.stringify(updatedUsersData));
  };

  const getUsersApi = async (): Promise<void> => {
    try {
      const usersData = localStorage.getItem("users");
      if (!usersData || JSON.parse(usersData).length === 0) {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const fetchedUsers: Users[] = response.data;
        setUserList(fetchedUsers);
        localStorage.setItem("users", JSON.stringify(fetchedUsers));
        console.log("The data has been put in LocalStorage!");
      } else {
        console.log("The data has already been put in LocalStorage!");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const storedUsers = getData();
    if (storedUsers !== null) {
      setUserList(storedUsers);
    } else {
      getUsersApi();
    }
  }, []);

  return { userList, deleteData };
};
export default useLocalStorage;
