import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem/>', () => {

    const props = {
        url: "https://www.google.es/",
        title: "Link de google"
    }

    test('Debe de hacer la prueba del snapshot', () => {
        const { container } = render(
            <GifItem {...props} />
        );
        expect(container).toMatchSnapshot();
    })
    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(
            <GifItem {...props} />
        );
        // expect(screen.getByRole("img").src).toBe(props.url);
        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(props.url);
        expect(alt).toBe(props.title);
    })
    test('debe de mostrar el titulo en el componente', () => {
        render(
            <GifItem {...props} />
        );
        expect(screen.getByText(props.title)).toBeTruthy();
    })
})