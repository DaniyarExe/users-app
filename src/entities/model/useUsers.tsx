// import { Users } from "./types" 
import { useState } from "react"

const useUsers = () => {
  // const [ UserList, setUserList ] = useState<Users[]>()
  const [ editId, setEditId ] = useState(-1)

  const handleEdit = (id: number) => {
    setEditId(id)
  }

  const handleDelete = () => {

  }

  return (
    {handleEdit, handleDelete}
  )
}

export default useUsers