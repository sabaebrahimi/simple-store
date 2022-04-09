import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
    render () {
        return (
            <nav>
                <ul>
                    <li>All Products</li>
                    <li>Smartphones</li>
                    <li>Notebooks</li>
                    <button>Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </ul>
            </nav>
        );
    }
}