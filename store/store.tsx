import create from "zustand";
import { persist } from "zustand/middleware";

const usePokedex = create(
    persist(
        (set, get) => ({
            appConfig: {
                home: {
                    title: "Catálogo",
                    description: "Generated by create next app",
                }
            },
            pokemon: {},
            setSelectedPokemon: (params: any) => {
                set(state => ({
                    ...state,
                    pokemon: params
                }));
            },
            currentPage: 20,
            setCurrentPage: (params: any) => {
                set(state => ({
                    ...state,
                    currentPage: params
                }));
            },
            loading: false,
            setLoading: (params: any) => {
                set(state => ({
                    ...state,
                    loading: params
                }));
            },
            clearCurrentPage: () => {
                set(state => ({
                    ...state,
                    currentPage: 20
                }));
            }

        }),
        {name: "pokedex"}
    ),
)

export default usePokedex;