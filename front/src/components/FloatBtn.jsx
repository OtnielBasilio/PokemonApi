import React, { Fragment } from 'react';
import './Stiles/stileBtn.scss';

const FloatBtn = () => {
    return (
        <Fragment>
            <div class="fContainer" >
                <input type="checkbox" id="fcheck" />
                <label htmlFor="fcheck" class="fbtn">
                </label>
                <ul class="fmenu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Pokedex</a></li>
                </ul>
            </div>

        </Fragment>
    );
}

export default FloatBtn;