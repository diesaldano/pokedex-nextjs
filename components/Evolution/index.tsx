import { NextComponentType } from "next"
import useData from "../../hooks/useData"
import CardItem from "../CardItem"
import { useRouter } from "next/router"
import Loading from "../Loading"

const Evolution: NextComponentType = ({url}: any) => {
    const router = useRouter()
    let id = router.query.name
    //use the hook to get the data
    const { data, error } = useData(url, '0')
    if(error) return <div>Error...</div>
    if(!data) return <div>Loading...</div>


    function Evolutions() {
        let nextEvolution =  data.chain.evolves_to.map((evolution: any) => {
            let first = {
                name: data.chain.species.name,
                url: `https://pokeapi.co/api/v2/pokemon/${data.chain.species.name}`
            }
            let second;
            let third;
            //add species name
            second = {
                name: evolution.species.name,
                url: `https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`
            }
            if(evolution.evolves_to.length > 0){
                evolution.evolves_to.map((evolution: any) => {
                  third = {
                       name: evolution.species.name,
                       url: `https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`
                    }
                })
                if(!evolution.evolves_to || evolution.evolves_to.length === 0) return <Loading/>
            }
            return {
                first,
                second,
                third
            }
        })

        return (
            <div className="flex flex-col items-center justify-center">
                <div className="w-full">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {nextEvolution && nextEvolution.map((pokemon: any) => (
                            <>
                                { pokemon.first && pokemon.first.name !== id && <CardItem key={pokemon.first.name} pokemon={pokemon.first} /> }
                                { pokemon.second && pokemon.second.name !== id && <CardItem key={pokemon.second.name} pokemon={pokemon.second} /> }
                                { pokemon.third && pokemon.third.name !== id && <CardItem key={pokemon.third.name} pokemon={pokemon.third} /> }
                            </>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Evolutions/>
        </div>
    )
}

export default Evolution