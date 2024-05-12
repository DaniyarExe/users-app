import { FC } from "react"
import style from "./Button.module.scss"

interface ButtonProps {
    children: string
    onclick: () => void
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={style.MainBtn}>{children}</button>
  )
}

export default Button