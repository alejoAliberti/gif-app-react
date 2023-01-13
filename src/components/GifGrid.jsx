import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs"; 
import PropTypes from 'prop-types';


export const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category); 

console.log({ isLoading})

  return (
    <>
       <h3>{category}</h3>

       {
        isLoading && ( <h2 >Cargando...</h2>) 
       }

       

       <div className="card-grid">
         { images.map( (image) => (
             <GifItem
             key={image.id}
             {...image} //de esta forma recibe todas la properties de la imagen u objeto
             />
             
             
         ))   }  
       </div>
       
    </>
  )
}



GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
