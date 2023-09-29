import '../Globol.css'
import Header from "./Header";
import { Footer } from "./Footer";
import { Item } from './Item';
import { FormEvent, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function App(){
  const [newList, setNewList] = useState("")
  const [list,setList] = useState([
    "Lista de desejos",
    "Tarefas",
    "Receitas"
  ])
  function createNewList(event: FormEvent){
    event.preventDefault()
    setList([newList,...list])
    setNewList("")
  }
  return(
    <>
    <div className="layout">
      <Header/>
      <main className="main">
      <form onSubmit={createNewList} className="new-list">
        <label htmlFor="Form">
        <input type="text" 
        placeholder="Qual lista você deseja criar?"
        value={newList}
        onChange={(event) => {
          setNewList(event.target.value) 
        }}
        />
        </label>
       <button type="submit"><FiPlus/></button>
      </form>
      {list.map(list => {
        return <Item key={list} content={list}/>
      })}
      </main>
      <Footer/>
    </div>
    </>
  )
}