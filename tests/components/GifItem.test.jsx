import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";



describe('Pruebas en <GifItem.jsx', () => {
    
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe hacer match con el snapshot', () => {


          const {container} = render(<GifItem title={ title } url={ url } />);
          expect(container).toMatchSnapshot();
        

    });

    test('debe mostrar la imagen con el URL y el ALT indicado', ()=> {})
      
    render(<GifItem title={ title } url={url} />)
    // screen.debug();
    // expect(screen.getByRole('img').src ).toBe(url);
    // expect(screen.getByRole('img').alt).toBe( title );

    const {src, alt}= screen.getByRole('img'); //manera mas abreviada de testear el mismo ejemplo de arriba
    expect(src).toBe(url);
    expect(alt).toBe(alt);

    test("debe mostrar el titulo en el componente", () => {

        render(<GifItem title={ title } url={url} />)

        expect(screen.getByText(title) ).toBeTruthy();
    })
    
}); 