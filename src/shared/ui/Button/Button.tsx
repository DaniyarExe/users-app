import { FC, ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode; 
  onClick: () => void; 
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={style.MainBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
