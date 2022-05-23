//import next component
import { NextComponentType } from "next"
import useData from "../../hooks/useData"
import { PropsUrl } from "../../types/types"

//create component habitats
function Habitat( {url}: PropsUrl): JSX.Element {
    const { data, error } = useData(url, '0')
    if(error) return <div>Error...</div>
    if(!data) return <div>Loading...</div>

    return <h5>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h5> || <h5>No habitat</h5>
}

export default Habitat