// CSS import
import { useEffect, useState } from "react"
import "./PokemonDetails.css"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

function PokemoDetails() {

    const { id } = useParams();

    const [pokemon] = usePokemon(id)
    return (
        <>
            <h1 className="pokedex-redirect">
                <Link to="/">Pokedex</Link>
            </h1>
            {pokemon && <div className="pokemon-details-wrapper">
                <div className="pokemon-name">
                    {pokemon.name}
                </div>
                <div className="pokemon-img">
                    <img src={pokemon.image} alt="" />
                </div>
                <div className="pokemon-attr">
                    <div>
                        Height: {pokemon.height}
                    </div>
                    <div>
                        Weight: {pokemon.weight}
                    </div>
                </div>
                <div className="pokemon-types">
                    Type: {pokemon.types.map(t => <span className="type" key={t.type.name}>{t.type.name}</span>)}
                </div>
            </div>}
        </>
    )
}

export default PokemoDetails