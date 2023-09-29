import { BsFillTrash3Fill, BsGripVertical } from "react-icons/bs";
import "./Item.css"
import { FiPlus } from "react-icons/fi";
import { Product } from "./Product";
import { useState, FormEvent } from "react";

interface ListProps{
  content:string;
}

export function Item(props: ListProps){
  const [newItem, setNewItem] = useState("")
  const [item, setItem] = useState([
    
    "Produto 1",
    "Produto 2",
    "Produto 3"
  ])
  function createNewItem(event: FormEvent){
    event.preventDefault()
    setItem([newItem,...item])
    setNewItem("")
  }
  return(
    <div className="content">
    <div className="sub-itens">
      <div className="item-header">
        <button type="button">
          <BsGripVertical/>
        </button>
          <h3>{props.content}</h3>
      </div>
      <button type="button">
          <BsFillTrash3Fill/>
      </button>
    </div>
    <form onSubmit={createNewItem} className="new-sub-itens">
        <label htmlFor="List">
        <input type="text" 
        placeholder="Adicione sub-itens a sua lista" 
        value={newItem}
        onChange={(event) => {
          setNewItem(event.target.value) 
        }}
        />
        </label>
       <button type="submit"><FiPlus/></button>
      </form>  
      {item.map(item => {
        return <Product key={item} content={item}/>
      })}
    </div>
    
    
  )
}