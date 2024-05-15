import { FC, useState } from "react";
import style from "./styles.module.scss";
import { Users } from "@/entities/model";
import Button from "@/shared/ui/Button/Button";
import useUsers from "@/entities/model/useUsers";

export const UserCard: FC<Users> = ({ name, catchPhrase, id }) => {
  const { editUser, deleteUser } = useUsers();
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editName, setEditName] = useState(name);
  const [editCatchPhrase, setEditCatchPhrase] = useState(catchPhrase);

  const handleDelete = (id: number) => {
    deleteUser(id);
  };

  const handleEdit = (id: number) => {
    setEditUserId(id);
  };

  const handleSubmit = (data: Users) => {
    editUser(data);
    setEditUserId(null);
  };

  return (
    <section className={style.Main}>
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <span className={style.overlay}></span>
          <div className={style.cardContent}>
            {editUserId === id ? (
              <div>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="text"
                  value={editCatchPhrase}
                  onChange={(e) => setEditCatchPhrase(e.target.value)}
                />
                <Button onClick={() => handleSubmit({ id, name: editName, catchPhrase: editCatchPhrase })}>
                  Save
                </Button>
                <Button onClick={() => setEditUserId(null)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div>
                <h2 className={style.name}>{name}</h2>
                <p className={style.description}>{catchPhrase}</p>
                <div className={style.MainBtn}>
                  <Button onClick={() => handleEdit(id)}>Edit</Button>
                  <Button onClick={() => handleDelete(id)}>Delete</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
