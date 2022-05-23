import type { NextComponentType } from 'next'
import type { Props } from '../../types/types'

const CardList: NextComponentType = ({children}: Props) => {

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
