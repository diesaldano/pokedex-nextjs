import type { NextComponentType } from 'next'
import useData from '../../hooks/useData'
import Image from 'next/image'
import styles from './CardItem.module.css'


// import '/styles/CardItem.module.css'

const CardItem: NextComponentType = ({pokemon}) => {
    const { data, error } = useData(pokemon.url, '151')
    if(error) return <div>Error...</div>
    if(!data) return <div>Loading...</div>

    let name: string = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    let type: string = data.types.map((type: any) => type.type.name).join(' ')
    let image: string = data.sprites.other.home.front_default
    console.log(pokemon)
    return (
        <div>
            <div className='max-w-md px-8 py-8 bg-white shadow-lg rounded-sm '>
                <span>{type}</span>
                <div className={styles.imageContainer}>
                    <Image src={image} 
                        alt={data.name}
                        className={styles.image}
                        objectFit='contain'
                        layout={'fill'} 
                    />
                </div>
            </div>
            <h5>{ name }</h5>
        </div>
    )

}

export default CardItem;