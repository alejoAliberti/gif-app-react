import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components";



describe('Pruebas en <GifItem.jsx/>', () => {
    
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe hacer match con el snapshot', () => {


          const {container} = render(<GifItem title={ title } url={ url } />);
          expect(container).toMatchSnapshot();
        

    });

    test('debe mostrar la imagen con el URL y el ALT indicado', ()=> {

     render(<GifItem title={ title } url={url} />)  //render del sujeto de pruebas 

     //screen.debug(); //muestra por consola que se esta renderizando al momento de ejecutar esta prueba

     //expect(screen.getByRole('img').src).toBe(url); //tomamos la imagen con la propiedad src y evaluamos que coincida con la url que recibe
     
     //expect(screen.getByRole('img').alt).toBe( title ); //tomamos la imagen y evaluamos que el titulo sea igual que el de su propiedad alt 

      const {src, alt}= screen.getByRole('img'); //en este const desestructuramos del elemento getByRole('img') las propiedades src y alt
      expect(src).toBe(url); //evaluacion de la url
      expect(alt).toBe(alt); //evaluacion del titulo 
    })
      
    

    test("debe mostrar el titulo en el componente", () => {

        render(<GifItem title={ title } url={url} />) //render del sujeto de pruebas

        expect(screen.getByText(title) ).toBeTruthy(); //Evaluamos que realmente el texto se este renderizando en pantalla
    })
    
}); 