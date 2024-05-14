// import { Users } from "./types" 
import { useState } from "react"
import { Users } from "./types"

const useUsers = () => {
  const [userList, setUserList] = useState<Users[]>([])

  const editUser = (updUser: Users) => {
    setUserList(User => User.map(user => user.id === updUser.id ? updUser : user));

    const updatedUserData = userList.map(user => user.id === updUser.id ? updUser : user)
    localStorage.setItem('users', JSON.stringify(updatedUserData))
  }

  const deleteUser = (userId: number): void => {
    setUserList(User => User.filter(user => user.id !== userId))

    const updatedUserData = userList.map(user => user.id !== userId)
    localStorage.setItem('users', JSON.stringify(updatedUserData))
  }

  return (
    {editUser, deleteUser}
  )
}

export default useUsers