import React, { Fragment } from 'react';
import './Stiles/stileNavigation.scss';
import Inicio from './Inicio';
import Pokedex from './Pokedex';

const Navigation = () => {
    return (
        <Fragment>
            
                <div>
                    <nav>
                        <div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" class="logo" />
                        </div>
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" class="btn">
                            <i class="fas fa-bars"></i>
                        </label>
                        <ul class="menu">
                            <li><a href='#'>Inicio</a></li>
                            <li><a href='#'>Pokedex</a></li>
                        </ul>
                    </nav>
                    
                </div>
          
        </Fragment>
    );
}

export default Navigation;