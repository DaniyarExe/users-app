import { FC } from "react"
import style from "./Button.module.scss"

interface ButtonProps {
    children: string
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={style.Button}>{children}</button>
  )
}

export default Button