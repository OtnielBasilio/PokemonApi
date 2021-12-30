import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import CardItems from './CardItems';
import './Stiles/stile.scss';
import Navigation from './Navigation';

const Items = () => {
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/item/`);
    const [item, setItem] = useState([]);
    const [previousItem, setPreviousItem] = useState([]);
    const [nextItem, setNextItem] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setItem(res.data.results);
                setPreviousItem(res.data.previous);
                setNextItem(res.data.next);
                console.log(item)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [url]);


    return (
        <Fragment>
             <Navigation/>
            <h2>Pokedex</h2>
            <div>
                <ul class="PokemonContainer">
                    {item.map(p => (
                        <li key={p.name}><CardItems url={p.url} /></li>
                    ))}
                </ul>
            </div>
            <button onClick={() => setUrl(previousItem)} class="button">Atrás</button>
            <button onClick={() => setUrl(nextItem)} class="button">Adelante</button>

        </Fragment>
    );
}

export default Items;