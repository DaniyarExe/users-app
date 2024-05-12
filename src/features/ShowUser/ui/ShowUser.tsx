import { Users_List } from "@/entities/model/const";
import { UserCard } from "@/entities/ui/Card/UserCard";
import { Users } from "@/shared"; 
import { useEffect, useState } from "react";

const ShowUser = () => {
  const [users, setUsers] = useState<Users[]>([]); 

  useEffect(() => {
    Users_List()
    .then(data => {
        setUsers(data);
    })
    .catch(error => {
        console.log(error);
    });
  }, []);
  return (
    <>
      {users && users.map((user: Users) => ( 
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
};

export default ShowUser;
