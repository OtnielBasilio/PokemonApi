import React, { Fragment } from 'react';
import './Stiles/stileInicio.scss';
import Navigation from './Navigation';
import FloatBtn from './FloatBtn';
import Footer from './Footer';


const Inicio = () => {

    return (
        <Fragment>
            <Navigation />
            <div class=" Inicio">
                <h1 class="titulo">Historia</h1>

                <div class="info">
                    <p>Cuando el creador, Satoshi Tajiri, era joven, uno de sus pasatiempos favoritos era
                        la recolección y colección de insectos.Tajiri se dirigió a la ciudad de Tokio a estudiar,
                        ya que su padre quería que fuese ingeniero. Sin embargo, a Tajiri no le agradaba la idea de estudiar
                        y se dedicaba más a pasatiempos como los videojuegos. Pasó un tiempo y Tajiri llegó a trabajar como jugador
                        de prueba de algunos juegos para revistas, junto a Ken Sugimori, con quien hizo una gran amistad. En 1989 crearon
                        una revista llamada Game Freak la cual posteriormente se convirio en una compañía.</p>

                    <p>Tajiri tuvo la idea de un juego en donde se pudiera transferir información de una Game Boy a otra. Influenciado
                        por sagas como Final Fantasy y Dragon Quest, Tajiri asoció la idea de la metamorfosis. Asi que creó un RPG en
                        donde los monstruos podrían evolucionar y ser transportados de una consola portátil a otra.</p>
                    <p>
                        El proyecto fue enviado a Nintendo. Mientras que Tajiri era quien tenía la idea principal, Sugimori era el encargado de
                        los diseños de los monstruos. Así mismo, recibieron consejos por parte de Shigeru Miyamoto (creador de Mario Bros.) para
                        mejorar el juego, que en ese entonces recibía el nombre de Capsule Monster.
                    </p>
                    <img src="https://phantom-marca.unidadeditorial.es/0bf001e1df68b82bcbcb082a274e44f1/crop/3x0/500x279/resize/660/f/webp/assets/multimedia/imagenes/2021/02/11/16130417778164.jpg" alt="HIstoria Pokemon" class="Historia" />

                    <p>
                        La producción de este proyecto duró cinco años. En aquel tiempo, la consola Game Boy entró en declive por la escasez de nuevos
                        juegos, debido a que la compañía Nintendo ya no tenía más ideas para la consola portátil. Por otro lado, Game Freak estuvo con
                        carencia de acciones y recursos, por lo que su situación entró en jaque. Luego de esto, el proyecto de Tajiri fue renombrado
                        como Pocket Monsters. En febrero de 1996 se lanzaron al mercado Pocket Monsters Aka and Midori ("Red" y "Green") Inicialmente
                        el juego no tuvo éxito, pero al alcanzar un año, se había llegado a la marca de millón de copias.
                    </p>
                    <p>
                        Al ver esto, Nintendo decidió enviar la serie a occidente. El nombre fue abreviado a Pokémon debido a que había una serie de
                        Mattel conocida como Monster in My Pocket. Los juegos Pokémon Red y Blue se convirtieron en un éxito en los Estados Unidos,
                        con más de 200.000 copias vendidas en la primera semana.El eslogan de la serie en Japón fue ¡Vamos a conseguir Pokémon!
                        (ポケモンGETだぜ! Pokemon Getto Daze!?), el cual se hizo famoso. En los Estados Unidos, esta frase es conocida como “Gotta Catch'em All!”,
                        en Hispanoamérica como “¡Atrápalos ya!” y en España; "¡Hazte con todos!"
                    </p>
                </div>
                <h1 class="titulo">Acerca de la Pokedex</h1>
                <div>
                    <img src="https://www.pkparaiso.com/rubi-omega-zafiro-alfa/pokedex-hoenn/pokedex.png" alt="Pokedex" class="Pokedex" />
                    <p>El pokédex en el mundo ficticio de Pokémon, es un dispositivo electrónico que interviene en los videojuegos y la serie de anime. En los juegos,
                        su función es registrar los datos de un pokémon. En el manga y el anime, el Pokédex es una enciclopedia electrónica, la cual proporciona al entrenador
                        información sobre un pokémon que es desconocido con tan solo exponer el pokédex en frente del pokémon.</p>
                    <p>
                        En los videojuegos un entrenador recibe una pokédex en blanco al iniciar su recorrido. El objetivo es completar la información de todos los pokémon
                        disponibles en la región en donde se encuentre. El entrenador recibirá el nombre y la imagen del pokémon que haya sido encontrado. En Pokémon Red y Blue,
                        el pokédex registra la información de cada pokémon con tan solo verlo. La información más detallada de un pokémon se encuentra disponible después de que
                        el entrenador haya capturado a un pokémon salvaje. Esta información incluye tipo, altura, peso, técnicas, y una descripción breve del pokémon.
                    </p>
                </div>
                <h1 class="titulo">Acerca de los Items</h1>
                <div>
                    <p>En el mundo Pokémon existen objetos que se utilizan para diversas finalidades. La gran mayoría se aplican a los Pokémon, aunque también hay objetos que usan los
                        entrenadores.
                    </p>
                    <img src="https://i.pinimg.com/originals/00/73/b5/0073b564177a94aea1d147ad6aa637ce.jpg"  alt="Items" class="Items" />
                </div>
            </div>
            <FloatBtn />
            <Footer />
        </Fragment>
    );
}

export default Inicio;