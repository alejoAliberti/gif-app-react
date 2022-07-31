import React, {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory)) return; // validamos que el campo no se respita, si no se repite pasamos a cargarlo 
    // categories.push(newCategory);
     setCategories( [newCategory, ...categories  ])  //ejemplo 1 

    //  setCategories( cat =>  [...cat, 'Valorant'] ) ejemplo 2
  }


  return (
    <>

       
      <h1>Gif Expert App</h1>


      
      <AddCategory 
          // setCategories={setCategories}
      onNewValue={value  => onAddCategory(value)}
      />        {/* Pasamos la funcion como prop al componente */}

      

        { categories.map( category =>  (
            <GifGrid key={category} 
            category={category}/>
          ))
        }
  
      
    </>
  )
}
