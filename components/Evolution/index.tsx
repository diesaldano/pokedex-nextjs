import { NextComponentType } from "next"
import useData from "../../hooks/useData"
import CardItem from "../CardItem"
//pass props to the component
const Evolution: NextComponentType = ({url}) => {
    //use the hook to get the data
    const { data, error } = useData(url, '0')
    if(error) return <div>Error...</div>
    if(!data) return <div>Loading...</div>

    function Evolutions() {
        let nextEvolution =  data.chain.evolves_to.map((evolution: any) => {
            let arr;
            if(evolution.evolves_to.length > 0){
                arr = evolution.evolves_to.map((evolution: any) => {
                  return {
                       name: evolution.species.name,
                       url: `https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`
                    }
                })
                if(!arr || arr.length === 0) return <div>Loading...</div>
            }
            return arr

        })
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="w-full">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {/* <CardItem  pokemon={nextEvolution} /> */}
                        {nextEvolution[0] && nextEvolution[0].map((pokemon: any) => (
                            <CardItem key={pokemon.name} pokemon={pokemon} />
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