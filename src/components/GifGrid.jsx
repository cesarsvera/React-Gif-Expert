import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({nameCategory}) => {

    const {images, isLoading} = useFetchGifs(nameCategory);

    

  return (
    <>
        <h3>{nameCategory}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
            
        }
        <div className="card-grid">
            {
                images.map((img)=>(
                    <GifItem key={img.id} {...img} ></GifItem>
                )                   
                )
            }
        </div>

    
    </>
  )
}


GifGrid.propTypes = {
    nameCategory: PropTypes.string.isRequired
}


