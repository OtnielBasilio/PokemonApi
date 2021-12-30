import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import Card from './CardPokemon';
import './Stiles/stile.scss';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatBtn from './FloatBtn';

const Pokedex = () => {
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
    const [pokedex, setPokedex] = useState([]);
    const [previous, setPrevious] = useState([]);
    const [next, setNext] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setPokedex(res.data.results);
                setPrevious(res.data.previous);
                setNext(res.data.next);
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
                    {pokedex.map(p => (
                        <li key={p.name}><Card url={p.url} /></li>
                    ))}
                </ul>
            </div>
            <button onClick={() => setUrl(previous)} class="button">Atrás</button>
            <button onClick={() => setUrl(next)} class="button">Adelante</button>
            <FloatBtn/>
            <Footer/>
        </Fragment>
    );
}

export default Pokedex;