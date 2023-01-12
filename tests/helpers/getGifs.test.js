import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {
    
    test('debe devolver un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');


        expect(gifs.length).toBeGreaterThan( 0 ); //evaluamos que la cantidad de gifs recibida sea mayor a 0

        expect( gifs[0] ).toEqual(           //esperamos que los gifs recibidos desde la posicion 0 contengan como propiedad un ID, TITLE Y URL  
            {
                id: expect.any( String ) , //se espera que dentro de la propiedad contenga un String 

                title: expect.any( String ), //se espera que dentro de la propiedad contenga un String 
                
                url: expect.any( String ), //se espera que dentro de la propiedad contenga un String 
            });

    } )
})