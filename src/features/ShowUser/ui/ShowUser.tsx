import { useEffect } from "react";
import { Users } from "@/entities";
import { UserCard } from "@/entities/ui/Card/UserCard";
import { checkLocalStorage } from "@/features/CheckLocalStorage";
import useUsers from "@/entities/model/useUsers";

const ShowUser = () => {
  const { userList, setUserList } = useUsers();

  useEffect(() => {
    checkLocalStorage(setUserList);
  }, [setUserList]);

  return (
    <>
      {userList && userList.map((user: Users) => (
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
};

export default ShowUser;
