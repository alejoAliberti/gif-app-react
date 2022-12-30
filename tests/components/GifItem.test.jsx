import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";
describe('Pruebas en <GifItem.jsx', () => {
    
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe hacer match con el snapshot', () => {


          const {container} = render(<GifItem title='' url='' />);
          expect(container).toMatchSnapshot();
        

    });
    
});