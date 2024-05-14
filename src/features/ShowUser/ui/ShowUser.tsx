import { UserCard } from "@/entities/ui/Card/UserCard";
import { Users } from "@/entities"; 
import { useEffect, useState } from "react";
import axiosIns from "@/shared/api/axiosInstance"

const ShowUser = () => {
  
  const [ user, setUSer ] = useState<Users[]>([])

  // useEffect( () => {
  //   axiosIns("/users")
  //       .then(res => setUSer(res.data))
  //       .catch(err => console.log(err)
  //       )
  // })


  return (
    <>
      {user && user.map((user: Users) => ( 
        <UserCard key={user.id} {...user} />  
      ))}
    </>
  );
};

export default ShowUser;
