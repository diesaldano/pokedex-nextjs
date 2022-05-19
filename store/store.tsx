import create from "zustand";
import { persist } from "zustand/middleware";

const usePokedex = create(
    persist(
        (set, get) => ({
            pokemon: {},
            setSelectedPokemon: (params: any) => {
                set(state => ({
                    ...state,
                    pokemon: params
                }));
            },
        }),
        {name: "pokedex"}
    ),
)

export default usePokedex;