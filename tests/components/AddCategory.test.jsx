import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components";


describe('Pruebas en <AddCategory />', () => {
   
   test('debe cambiar el valor de la caja de texto', ()=> {
   
      render( <AddCategory onNewValue= { () => {} }/>); //llamamaos al sujeto de pruebas y le pasamos onNewValue diciendo que es una funcion

      
      const input = screen.getByRole('textbox'); //referencia al input donde enviamos el valor 
      
      fireEvent.input( input, { target: { value: 'Saitama' } } ); //disparamos el evento onChange
      
      expect( input.value ).toBe('Saitama'); //definimos la prueba diciendo que el valor de input sea igual a Saitama 
      
      // screen.debug(); //captura de consola para saber que se esta renderizando
   
   });


   test('debe llama onNewValue si el input tiene un valor', () => {
      
      const inputValue = 'Saitama'; //valor que vamos a mandar en nuestro input
      
      const onNewValue = jest.fn();

      render( <AddCategory onNewValue= { onNewValue }/>);

      const input = screen.getByRole('textbox'); //referencia al input

      const form = screen.getByRole('form'); //referencia al formulario

      fireEvent.input( input, { target: { value: inputValue } } ); //disparamos el evento que cambia el valor del input, con la constante que definimos con el valor 'Saitama' 
      
      fireEvent.submit( form ); //disparamos el evento submit del formulario 

      expect(input.value).toBe('');   //evaluamos que el valor del input sea un string vacio 

      expect( onNewValue ).toHaveBeenCalled(); //evaluamos que la funcion haya sido llamada 

      expect( onNewValue ).toHaveBeenCalledTimes(1); //evaluamos que la funcion haya sido llamada solo 1 vez 


      expect( onNewValue ).toHaveBeenCalledWith( inputValue ); //evaluamos que la funcion haya sido llamada con el valor del input

      
      
      // screen.debug();

   });


   test('no debe llamar el onNewValue si el input esta vacio', () => {

      const onNewValue = jest.fn(); //definimos que onNewValue es una funcion para poder utilizarla las veces que lo requeramos 


      render( <AddCategory onNewValue={ onNewValue }/> ) //render del sujeto de pruebas

      const form = screen.getByRole('form'); //referencia al formulario


      fireEvent.submit( form ); //ejecucion el evento submit del form


      expect( onNewValue).toHaveBeenCalledTimes(0); //evaluamos que la funcion onNewVaLue no haya sido llamada

      expect( onNewValue).not.toHaveBeenCalled();// la misma evaluacion  opero con una mejor sintaxis

      // screen.debug();

   })




})