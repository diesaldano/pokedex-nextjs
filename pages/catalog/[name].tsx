import React from 'react'
import type { NextComponentType } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import useData from '../../hooks/useData'
import usePokedex from '../../store/store'
import Evolution from '../../components/Evolution'
import Habitat from '../../components/Habitat'
import styles from './catalog.module.css'
import { pokemonData, PokemonProps } from '../../interfaces/interfaces'
import Loading from '../../components/Loading'

//server side rendering example receive pathname 
export async function getServerSideProps(context: { query: { name: string } }) {
    const { name } = context.query
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await res.json()
  
    // Pass data to the page via props
    return { props: { pokemon } }
  }

function Detail ({pokemon}: any): JSX.Element {
    const CardItem = dynamic(() => import('../../components/CardItem'))

    let image: string = pokemon.sprites.other.home.front_default
    let name: string = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    const { data, error } = useData(pokemon.species.url, '0')
    if(!data) return (<Loading/>)
    
    let { url } = data.habitat
    
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <div className={styles.columnImage}>
                    <div className={styles.imageContainer} >
                        <Image src={pokemon.sprites.other.home.front_default} 
                            alt={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            className={styles.image}
                            objectFit='contain'
                            layout={'fill'}
                        />
                    </div>
                </div>
                <div className={styles.column}>
                    <h1 className={styles.titulo}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1> 
                    <Habitat url={url}/>
                    <h5 className={styles.description}>Description</h5>
                    {
                        !data ? <div>Error...</div> :
                        !data ? <div>Loading...</div> :
                        <p className={styles.paragraph}>
                            {   
                                data.flavor_text_entries.map(
                                    (flavor: any) => {
                                        if(flavor.language.name === 'en'){
                                            return flavor.flavor_text.replace(/[^a-zA-Z ]/gi, ' ')
                                        }
                                    }).join(' ')
                            }
                        </p>                            
                    }
                </div>
            </div>
            < Evolution url={data.evolution_chain.url} />
        </div>
    )
}

export default Detail;
