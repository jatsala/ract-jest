/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render } from "@testing-library/react";
import App from './App';
import ListadoNotas from "./components/ListadoNotas";
import InputNuevaNota from "./components/inputNuevaNota";

describe('REACT - Testeamos los componentes', () => {
    it('El listado se renderiza correctamente', () => {
        const r = render(<ListadoNotas />);
        expect(r).toBeDefined()
    });
    it('El listado renderiza un listado correctamente', () => {
        const notas = ['Bañar al perro', 'Terminar las tareas'];
        const r = render(<ListadoNotas notas={notas} />);
        expect(r).toBeDefined()
    });
    it('El listado renderiza sólo las notas que deben renderizar', () => {
        const notas = ['Bañar al perro', 'Terminar las tareas'];
        const r = render(<ListadoNotas notas={notas} />);
        const div = r.getByLabelText('listado-notas');
        expect(div.childElementCount).toBe(2);
    });

});

describe('REACT - Hacemos un test de integración', () => {
    it('Renderizamos la app', () => {
        const r = render(<App />)
        expect(r).toBeDefined();
    })
    it('Se renderiza el input', () => {
        const placeholdertext = "Introduce una nueva nota";
        const r = render(<App />)
        const input = r.getByPlaceholderText(placeholdertext);
        expect(input).toBeDefined();
    })
    it('Cuando hacemos clic en el botón Añadir, se lanza el evento', () => {
        const funcionMock = jest.fn();
        const r = render(<InputNuevaNota addNuevaNota={funcionMock} />);
        const button = r.getByText("Añadir");
        fireEvent.click(button);
        expect(funcionMock).toHaveBeenCalledTimes(1);
    })
    it('Añadimos una nueva nota', () => {
        const placeholdertext = "Introduce una nueva nota";
        const r = render(<App />)
        const input = r.getByPlaceholderText(placeholdertext);
        const button = r.getByText("Añadir");
        const div = r.getByLabelText('listado-notas');
        const hijosInicial = div.childElementCount;
        fireEvent.change(input, { target: { value: 'Poner gasolina' } });
        fireEvent.click(button);
        const hijosFinal = div.childElementCount;
        expect(hijosFinal).toBeGreaterThan(hijosInicial);
        expect(hijosInicial).toBeLessThan(hijosFinal);
        expect(hijosInicial).not.toBe(hijosFinal);
    })
})

