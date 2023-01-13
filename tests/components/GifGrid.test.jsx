import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

  describe('Pruebas en <GigGrid/>', () => {

    const category = 'One Punch'; //constante con el valor incial que queremos evaluar 
     

    test('debe mostrar el loading inicialmente', () => {


        render(<GifGrid category={category} /> ); //render del sujeto de pruebas
        
        expect( screen.getByText( 'Cargando...') ); //evaluamos que tengamos el texto Cargando al iniciar el componente 
        
        expect( screen.getByText(category) );   //Evaluamos que la categoria tenga el valor indicado 
        
        screen.debug( );
    });


    test('debe mostrar items cuando se cargan las imagenes desde useFetchGifs ', () => {
        
    });






  });