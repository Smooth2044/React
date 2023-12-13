import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs';


function App() {
    // Aquí se utiliza useState para crear el estado 'category'
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h2>Aplicación de Gifs </h2>
      <AddCategory setCategory={setCategory} />
      <DisplayGifs category={category} />
    </div>
  )
}

export default App