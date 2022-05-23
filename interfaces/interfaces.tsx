
import {types} from '../types/types'

export interface PokemonProps {
    name: string,
    url: string
}

//store
export interface appConfig {
    home: {
        app: string,
        title: string,
        description: string,
        loadButton: string
    }
}

export interface store {
    appConfig: appConfig,
    pokemon: {},
    setSelectedPokemon: (params: any) => void,
    currentPage: number,
    setCurrentPage: (params: any) => void,
    loading: boolean,
    setLoading: (params: any) => void,
    clearCurrentPage: () => void
}

export interface pokemonData {
    abilities: Array<any>,
    base_experience: number;
    forms: Array<object>;
    game_indices: Array<any>;
    height: number;
    held_items: Array<any>;
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Array<any>;
    name: string
    order: number
    past_types: Array<any>;
    species: {
        name: string,
        url: string
    }
    sprites: {
        back_default: string,
        back_female: string,
        back_shiny: string,
        back_shiny_female: string,
    }
    stats: Array<any>
    types: types
    weight: number
}