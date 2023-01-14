import { render, renderHook, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

  describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch'; //constante con el valor incial que queremos evaluar 
     

    test('debe mostrar el loading inicialmente', () => {

      useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
      });


        render(<GifGrid category={category} /> ); //render del sujeto de pruebas
        
        expect( screen.getByText( 'Cargando...') ); //evaluamos que tengamos el texto Cargando al iniciar el componente 
        
        expect( screen.getByText(category) );   //Evaluamos que la categoria tenga el valor indicado 
        
        // screen.debug( );
    });


    test('debe mostrar items cuando se cargan las imagenes desde useFetchGifs ', () => {

      const gifs = [{
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localHost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localHost/Goku.jpg'
      }
    ]

      useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
      });

      render( <GifGrid category={category} />); 

      expect( screen.getAllByRole('img').length ).toBe(2);


        
    });






  });