import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = ( NewCategory) => {
    if(categories.includes(NewCategory)) return;
   // setCategories(categories.push("Valorant")) Este ejemplo estaria MAL
   setCategories( [NewCategory,...categories])
  // setCategories( cat => [...cat, 'Valorant'])
  }

  return (
    <>

    <h1> GifExpertApp</h1>
    <AddCategory 
   // setCategories={setCategories}
    onNewCategory={onAddCategory}
    />
      {
      categories.map( (category) => (
          <GifGrid 
          key={category} 
          category={category}/>
        ))
      }

    </>
  )
}
