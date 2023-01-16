import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('pruebas en el hook <useFetchGifs />', () => {
    
    test('debe regresar el estado inical', () => {

        const { result } =renderHook(() => useFetchGifs('One Punch') ); //llamamos al sujeto de pruebas y del componente desestructuramos el resultado
         
        const { images, isLoading} = result.current //desestructuramos el resultado tomando las imagene y el valor de isloading
        
        expect(images.length).toBe(0); //evaluamos que el largo del array de images sea 0

        expect(isLoading).toBeTruthy(); //evaluamos que el valor de isLoading sea true 
    });

    test('debe devolver un arreglo de imagener y isLoading en false', async() => {
        
        const {result} = renderHook(()=> useFetchGifs('One Punch'));
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0) //de esta forma le decimos que espere a que el largo de las imagenes sea 0 
        );

        const {images, isLoading} = result.current;

        expect( images.length).toBeGreaterThan(0);

        expect(isLoading).toBeFalsy();


    });
    
}); 