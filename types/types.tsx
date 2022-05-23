import { PokemonProps } from "../interfaces/interfaces"

export type PropsChildren = {
    children?: JSX.Element|JSX.Element[]
}

export type PropsObject = {
    name: string,
    url: string
}

export type types = {
    slot: number,
    type: {[key: string]: string}
}

export type Props = {
    pokemon: PokemonProps
}

export type PropsUrl = {
    url: string
}