import { FC } from "react";
import style from "./styles.module.scss";
import { Users } from "@/shared";

export const UserCard: FC<Users> = ({ name, catchPhrase }) => {
  return (
    <section className={style.Main}>
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <span className={style.overlay}></span>
          <div className={style.cardContent}>
            <h2 className={style.name}>{name}</h2>
            <p className={style.description}>{catchPhrase}</p>
            <div className={style.MainBtn}>
              <button className={style.Edit}>Edit</button>
              <button className={style.Delete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
