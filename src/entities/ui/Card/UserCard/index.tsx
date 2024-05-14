import { FC } from "react";
import style from "./styles.module.scss";
import { Users } from "@/entities/model"; 
import { Button } from "@/shared";
import useUsers from "@/entities/model/useUsers";

export const UserCard: FC<Users> = ({ name, catchPhrase, id }) => {

  const {handleDelete, handleEdit} = useUsers();

  return (
    <section className={style.Main}>
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <span className={style.overlay}></span>
          <div className={style.cardContent}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.description}>{catchPhrase}</p>
            <div className={style.MainBtn}>
              <Button onСlick={() => {handleDelete(id)}}>Edit</Button>
              <Button onСlick={() => {}}>Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
