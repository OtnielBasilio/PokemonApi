import React, { Fragment } from 'react';
import pngegg from './Images/pngegg.png'
import './Stiles/stileFooter.scss';

const Footer = () => {
    return (
        <Fragment>
            <div>
                <footer class="Footer">
                    <div class="group">
                        <img src={pngegg} class="Pokebola" alt="Pokebola"></img>
                        <div class="datos">PokeApi</div>
                        <div class="datos">Otniel Candido Basilio Torres</div>
                        <div class="datos">2021</div>
                    </div>
                </footer>
            </div>

        </Fragment>
    );
}

export default Footer;