import { BsFillTrash3Fill } from "react-icons/bs"
import "./Product.css"

interface ProductProps{
  content:string;
}
export function Product(props: ProductProps){
  return(
    <>
    <div className="product">
    <div className="product-header">
    <button type="button">
    </button>
    <p>{props.content}</p>
  </div>
  <button type="button">
      <BsFillTrash3Fill/>
  </button>
  </div>
  </>
  )
}