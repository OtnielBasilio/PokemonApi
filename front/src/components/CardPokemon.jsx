import React, { useState, useEffect, Fragment } from 'react';
import './Stiles/stile.scss';
import axios from 'axios'

export default function Card({ url }) {

    const [card, setCard] = useState([]);
    const [types, setTypes] = useState([]);
    const [sprites, SetSprites] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(url)
            setCard(res.data);
            SetSprites(res.data.sprites)
            setTypes(res.data.types)
        }
        fetchData();
    }, []);
    
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