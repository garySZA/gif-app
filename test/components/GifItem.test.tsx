import React from "react";
import { getByRole, render, screen } from "@testing-library/react"
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en el componente GifItem', () => { 
    const image = {
        id: '123123',
        title: 'este es un titulo',
        url: 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=ec5732f0b50oz49jkhdlxakc2ju59epei8s23pfy343qm5wj&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    };

    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem image={ image }/> )

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL indicado', () => {
        render( <GifItem image={ image }/> )
        // screen.debug();

        const img = screen.getByRole('img') as HTMLElement;

        expect( img.getAttribute('src') ).toBe( image.url );

    });

    test('Debe de mostrar la imagen con el ALT indicado', () => {
        render( <GifItem image={ image }/> )
        // screen.debug();

        const img = screen.getByRole('img') as HTMLElement;

        expect( img.getAttribute('alt') ).toBe( image.title );

    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render(<GifItem image={image} />);

        expect( screen.getByText( image.title ) ).toBeTruthy();
    });
});