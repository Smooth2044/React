import { useState } from 'react'
import './App2.css'
import AddCategoryS from './stickers/AddCategory';
import DisplayStickers from './stickers/DisplaySticker';

function App2() {
  // Aquí se utiliza useState para crear el estado 'category'
const [categoryS, setCategoryS] = useState("");

return (
  <div className="App2">
    <h2>Aplicación de Stickers </h2>
    <AddCategoryS setCategoryS={setCategoryS} />
    <DisplayStickers category={categoryS} />
  </div>
)
}

export default App2