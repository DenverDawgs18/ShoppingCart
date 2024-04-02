import { describe, it, expect } from "vitest";
import App from '../App.jsx';
import Cart from '../Cart.jsx';
import Card from '../Card.jsx'
import {render} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

describe('App component', () => {
    it('renders against snapshot', () => {
        const {wrapper} = render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        );
        expect(wrapper).toMatchSnapshot()
    })
})
describe('Cart component', () => {
    it('renders against snapshot', () => {
        const {wrapper} = render(
        <BrowserRouter>
            <Cart />
        </BrowserRouter>
        );
        expect(wrapper).toMatchSnapshot()
    })
})
describe('Card component', () => {
    it('renders against snapshot', () => {
        const {wrapper} = render(
        <BrowserRouter>
            <Card />
        </BrowserRouter>
        );
        expect(wrapper).toMatchSnapshot()
    })
})