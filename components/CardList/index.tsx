import type { NextComponentType } from 'next'
import type { PropsChildren } from '../../types/types'

function CardList({children}: PropsChildren){
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
                <div className="w-full">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 " >
                        {children}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default CardList
