import React from 'react'
import type { NextComponentType } from 'next'
import { useRouter } from 'next/router'
import useData from '../../hooks/useData'
import Image from 'next/image'
import styles from './CardItem.module.css'
import usePokedex from '../../store/store'
import Loading from '../../components/Loading'
import type { Props, types } from '../../types/types'
import { pokemonData } from '../../interfaces/interfaces'

const CardItem: NextComponentType<Props> = ({pokemon}: any ) => {
    const router = useRouter()
    const { data, error } = useData(pokemon.url, '0')

    const setSelectedPokemon: (data: pokemonData) => void = usePokedex((state: any) => state.setSelectedPokemon)
    const clearCurrentPage: () => void = usePokedex((state: any) => state.clearCurrentPage)

    if(error) return <div>Error...</div>
    if(!data) return <Loading />
    
    let name: string = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    let image: string = data.sprites.other.home.front_default

    const types = () => {
        return data.types.map((type: types) => {
            const color: {[key: string]: string} =  {
                    normal: '#A8A878',
                    fighting: '#C03028',
                    flying: '#A890F0',
                    poison: '#A040A0',
                    ground: '#E0C068',
                    rock: '#B8A038',
                    bug: '#A8B820',
                    ghost: '#705898',
                    steel: '#B8B8D0',
                    fire: '#F08030',
                    water: '#6890F0',
                    grass: '#78C850',
                    electric: '#F8D030',
                    psychic: '#F85888',
                    ice: '#98D8D8',
                    dragon: '#7038F8',
                    dark: '#705848',
                    fairy: '#EE99AC',
                    default: '#A8A878'
            }
            const typeName: string = type.type.name
            const typeColor: string = color[typeName] || color['default']

            return <span key={type.type.name} className={styles.type} style={{ backgroundColor: `${typeColor}` }}>
                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                    </span>
        })
    }
    
    function handleClick(data: pokemonData){
        setSelectedPokemon(data)
        router.push(`/catalog/${data.name}`)
    }

    return (
        <div onClick={()=> handleClick(data)}>
            <div className='max-w-md mx-auto px-8 py-8 bg-white shadow-lg rounded-sm'>
                {types()}
                <div className={styles.imageContainer}>
                    <Image src={image} 
                        alt={data.name}
                        className={styles.image}
                        objectFit='contain'
                        layout={'fill'}
                        priority
                    />
                </div>
            </div>
            <div className='max-w-md mx-auto px-2 py-4'>
                <h5 className={styles.name}>{ name }</h5>
            </div>
        </div>
    )

}

export default CardItem;