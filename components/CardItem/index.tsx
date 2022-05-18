import type { NextComponentType } from 'next'
import { useRouter } from 'next/router'

import React from 'react'
import useData from '../../hooks/useData'
import Image from 'next/image'
import styles from './CardItem.module.css'
import usePokedex from '../../store/store'
// import '/styles/CardItem.module.css'

const CardItem: NextComponentType = ({pokemon}) => {
    const router = useRouter()
    const { data, error } = useData(pokemon.url, '0')
    // const[selectedPokemon, setSelectedPokemon] = React.useState(data)
    //use the store to set the selected pokemon
    const state = usePokedex(state => state)
    const setSelectedPokemon = usePokedex((state: any) => state.setSelectedPokemon)
    
    if(error) return <div>Error...</div>
    if(!data) return <div>Loading...</div>
    
    let name: string = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    let type: string = data.types.map((type: any) => type.type.name).join(' ')
    let image: string = data.sprites.other.home.front_default

    
    
    function handleClick(data: any){
        setSelectedPokemon(data)
        router.push(`/catalog/${data.name}`)
    }

    
    return (
        <div  onClick={()=> handleClick(data)}>
            <div className='max-w-md mx-auto px-8 py-8 bg-white shadow-lg rounded-sm '>
                <span>{type}</span>
                <div className={styles.imageContainer}>
                    <Image src={image} 
                        alt={data.name}
                        className={styles.image}
                        objectFit='contain'
                        layout={'fill'}
                        // blurDataURL={true}
                        // placeholder="blur"
                    />
                </div>
            </div>
            <h5>{ name }</h5>
        </div>
    )

}

export default CardItem;