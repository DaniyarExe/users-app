import { Users } from "@/shared"
import { todo } from "node:test"
import { useState } from "react"

const useUsers = () => {
  const [ UserList, setUserList ] = useState<Users[]>()

  const editUser = (id: number, changes: Users): void => {
    const updUser = UserList?.map((user) => {
      user.id === id
      ? {
        ...user,
        changes
      }
      :todo
    })
  }

  const deleteUser = (userId: number): void => {
    const updUser = UserList?.filter(({id}) => {
      id !== userId
    })
  }

  return (
    {deleteUser, editUser}
  )
}

export default useUsers