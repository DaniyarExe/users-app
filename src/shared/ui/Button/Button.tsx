import { FC } from "react"
import style from "./Button.module.scss"

interface ButtonProps {
    children: string
    onСlick: () => void
}

const Button: FC<ButtonProps> = ({ children, onСlick }) => {
  return (
    <button className={style.MainBtn} onClick={onСlick}>{children}</button>
  )
}

export default Button