import React, { useState, useEffect, Fragment } from 'react';
import './Stiles/stile.scss';
import axios from 'axios'

export default function CardItems({ url }) {

    const [card, setCard] = useState([]);
    const [types, setTypes] = useState([]);
    const [sprites, SetSprites] = useState([]);

    /*useEffect(() => {
        axios.get(url)
            .then((res) => {
                setCard(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);*/

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(url)
            setCard(res.data);
            SetSprites(res.data.sprites)
            setTypes(res.data.types)
            console.log(card)
        }
        fetchData();
    }, []);

    //console.log(card);
    /* setTypes(card.types);
     console.log(types);*/

    return (
        <Fragment>
            <div class="card">
                <div class="header_card">
                    <img src={sprites.front_default}></img>
                </div>
                <div class="body_card">
                    <div class="card_content">
                        <span>#{card.id}</span>
                        <p >{card.name}</p>

                    </div>
                    <div class="typePokemon">
                        {types.map((type, idx) => {
                            return (
                                <p key={idx}>{type.type.name}</p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}