import { FiMenu, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.svg"
import "./Header.css"
export default function Header(){
  return(
    <header className="header">
        <a href="#"> <FiMenu/></a>
        <a href="#"> <img className="logo" src={logo} alt="Logo-we.digi" /></a>
      <a href="#"><FiShoppingCart/></a>
      </header>
  )
}