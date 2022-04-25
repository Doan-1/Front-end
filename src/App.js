// import {useState} from 'react';
import './App.css';
import React from 'react';

import Header from '../src/components/ConstComponets/Header'
import Footer from '../src/components/ConstComponets/Footer'
import Home from './pages/Home_page/Home'
import Account from './pages/Account_page/Account'
import ProductInfo from './pages/ProductInfo_page/ProductInfo'
import Products from './pages/Products_page/Products'
import Bag from './pages/Bag_page/Bag'
import Favorites from './pages/Favorites_page/Favorites'
import Profile from './pages/Profile_page/Profile'
import Orders from './pages/Orders_page/Orders'
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'React JS'
//   }
// ]
function App() {

  // const [checked, setChecked] =useState([])

  // console.log(checked)

  // const handleCheck = (id) => {
  //   setChecked(prev => {
  //     const isChecked = checked.includes(id)
  //     if(isChecked)
  //     {
  //       return  checked.filter(item => item != id)
  //     }else{
  //       return [...prev, id]
  //     }
  //   })
  // }
  // const handleSubmit = () => {

  // }

  

  // const [todo, setTodo] = useState('')
  // const [todos, setTodos] = useState(() => {
  //   const strorageTodos = JSON.parse(localStorage.getItem('todos'))
  //   return strorageTodos
  // })

  // const handleSubmit = ()=> {
  //   setTodos(prev => {
  //     const newTodos =  [...prev, todo]
  //     const jsonTodos = JSON.stringify(newTodos)
  //     localStorage.setItem('todos', jsonTodos)
  //     return  newTodos
  //   })
  //   setTodo('')
  // }
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
    // <div style={{padding: 100}}>
    //   {/* {
    //     courses.map((course) => (
    //       <div key={course.id}>
    //         <input
    //           type="checkbox" 
    //           checked={checked.includes(course.id)}
    //           onChange={() => handleCheck(course.id)}
    //           />
    //         {course.name}
    //       </div>
    //     ))
    //   } */}
    //   <input
    //     value={todo}
    //     onChange={e => setTodo(e.target.value)}
    //     />
    //   <button onClick={handleSubmit}>Add</button>

    //   <ul>
    //     {
    //       todos.map((todo, index)  =>
    //         (
    //           <li key={index}>{todo}</li>
    //         ))
    //     }
    //   </ul>
    // </div>
  );
}

export default App;
