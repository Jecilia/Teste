import footer from "../assets/footer.svg"
import "./Footer.css"

export function Footer(){
  return(
    <footer className="footer">
        <p>todos os direitos resercados à: we.digi</p>
       <a href="#"><img className="logo" src={footer} alt="image-we.digi" /></a>
      </footer>
  )
}