import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el <GifExpertApp/>', () => {
    test('debe de cambiar mi value en el input ', () => {
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Demon Slayer' } });
        expect(input.value).toBe('Demon Slayer')
    });

    test('no mostrar una categoria si ya existe', () => {

        render(<GifExpertApp />)
        const inputValue = 'Demon slayer';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(screen.getAllByText('Demon Slayer').length).toBe(1);
    });

    test('Hacer un snapshot del componente', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });
})