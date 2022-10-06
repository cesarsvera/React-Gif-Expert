import { useState } from "react";
import { AddCategory,GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);

    const onAddCategory = (newValue)=>{
        if(categories.includes(newValue)) return
        setCategories([newValue, ...categories])
    }

  return (
    <>
        {/* titulo de la aplicacion */}
        <h1>GiftExpertAPP</h1>

        {/* input para el ingreso de las consultas */}
        <AddCategory changeCategory = {onAddCategory}></AddCategory>

        {/* listado de Gif */}
        
        
        {categories.map((category)=>(
            <GifGrid key={category} nameCategory = {category}></GifGrid>
        ))
        }
            
        
    </>
  )
}
