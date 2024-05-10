import style from "./styles.module.scss";
import axiosInstances from "@/shared/api/axiosInstance";

export const UserCard = () => {
  axiosInstances("/users");

  return (
    <section>
      <div className={style.slideContainer}>
        <div className={style.slideContent}>
          <div className={style.cardWrapper}>
            <div className={style.card}>
              <span className={style.overlay}></span>
              <div className={style.cardContent}>
                <h2 className={style.name}>David Dell</h2>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae quos consectetur delectus vel fugiat fugit deserunt saepe ex maiores?</p>

                <button className={style.Edit}>Edit</button>
                <button className={style.Delete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

