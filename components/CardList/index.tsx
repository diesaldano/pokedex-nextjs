import type { NextComponentType } from 'next'
import CardItem from '../CardItem'
import UseData from '../../hooks/useData'

const CardList: NextComponentType = () => {
    const { data, error } = UseData('https://pokeapi.co/api/v2/pokemon', '151')
    if(error) return <div>Error...</div>
    if(!data) return <div>Loading...</div>

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
                <div className="w-full">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {
                            data.results.map((pokemon: any) => (
                                <CardItem key={pokemon.name} pokemon={pokemon} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardList
