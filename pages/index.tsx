import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardList from '../components/CardList'
import useData from '../hooks/useData'
import usePokedex from '../store/store'
import Loading from '../components/Loading'
import { useEffect } from 'react'

const Home: NextPage = () => {
    const app = usePokedex((state: any) => state.appConfig.home.app)
    const titulo = usePokedex((state: any) => state.appConfig.home.title)
    const descripcion = usePokedex((state: any) => state.appConfig.home.description)
    const loadButton = usePokedex((state: any) => state.appConfig.home.loadButton)
    const setAppConfig = usePokedex((state: any) => state.setAppConfig)
    const currentPage = usePokedex((state:any) => state.currentPage)
    const setCurrentPage = usePokedex((state: any) => state.setCurrentPage)
    const clearCurrentPage = usePokedex((state: any) => state.clearCurrentPage)
    
    const CardItem = dynamic(() => import('../components/CardItem'), {
        ssr: false,
        loading: () => <Loading />
    })
    
    const { data, error } = useData(`https://pokeapi.co/api/v2/pokemon/?limit=${currentPage}`, '0')

    if(error) return <div>Error...</div>
    

    //start app or refresh page clear data
    useEffect(() => {
        clearCurrentPage()
    }, [])

    //onclick load more button lazy loading
    const lazyLoad = () => {
        setCurrentPage(currentPage + 20)
    }

    return (
    <div className={styles.container}>
        <Head>
            <title>{app}</title>
            <meta name={titulo} content={descripcion} />
            <link rel="icon" href="/pokeball-icon.png" />
        </Head>

        <main className={styles.main}>  
            <h1 className={styles.title}>{titulo}</h1>
            <CardList>
                {
                    !data && Array(6).fill(0).map((_, index) => (
                        <Loading key={index} />
                    ))
                }
                {
                   data && ( data.results.map((pokemon: any) => (
                        <CardItem key={pokemon.name} pokemon={pokemon} />
                    ))
                   )
                }
            </CardList>
            <div>
                <button type='button' onClick={ lazyLoad }>{loadButton}</button>
            </div>
        </main>
    </div>
    )
}

export default Home
