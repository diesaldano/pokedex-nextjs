import type { NextComponentType } from 'next'
import { useState } from 'react'
import usePokedex from '../../store/store'
import Image from 'next/image'
import styles from './catalog.module.css'
import useData from '../../hooks/useData'
import Evolution from '../../components/Evolution'
import React from 'react'

const Detail: NextComponentType = () => {
    
    const store = usePokedex()
    const state = useState(usePokedex((state: any) => state))
    
    if(!state) return (<div>loading</div>)
    const { pokemon } = state[0]
    let image: string = pokemon.sprites.other.home.front_default
    let name: string = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    let type: string = pokemon.types.map((type: any) => type.type.name).join(' ')
    const { data, error } = useData(pokemon.species.url, '0')
    React.useEffect(() => {
        console.log(store, state)
    }, [state])
    if(!data) return (<div>loading...</div>)
    return (
        <div>
            <div className='max-w-md mx-4 px-8 py-8 bg-white shadow-lg rounded-sm '>
                <span>{type}</span>
                <div className={styles.imageContainer} >
                    <Image src={image} 
                        alt={name}
                        className={styles.image}
                        objectFit='contain'
                        layout={'fill'}
                    />
                </div>
            </div>
             <div className='mx-4 my-4'>
                 <h1 className={styles.titulo}>{name}</h1>
                 <p>
                    {

                    }
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Massa diam nisi enim
                    convallis. Eget in malesuada enim diam
                    lectus. Odio arcu egestas nibh aliquet
                    tortor. Posuere est curabitur aliquam,
                    malesuada neque, vitae arcu. Ac quam sit
                    purus consequat rutrum sit elementum.
                    Scelerisque commodo iaculis amet,
                    tincidunt sodales. Lacus, arcu, convallis
                    nulla ipsum. Eleifend consequat mauris
                    volutpat commodo. Tellus ullamcorper dui
                    ac condimentum. Mauris purus nibh augue
                    non quis vitae. Aliquam tellus faucibus in id
                 </p>
                 
                 <h5>Description</h5>
                {
                    !data ? <div>Error...</div> :
                    !data ? <div>Loading...</div> :
                    <p>
                        {   
                            data.flavor_text_entries.map(
                                (flavor: any) => {
                                    if(flavor.language.name === 'en'){
                                        return flavor.flavor_text
                                    }
                                }).join(' ')
                        }
                    </p>                            
                }
             </div>
             < Evolution url={data.evolution_chain.url} />
        </div>
    )
}

export default Detail;
