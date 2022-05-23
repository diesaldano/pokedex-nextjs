import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardItem from '../components/CardItem'

let data = {
    "name": "Bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
}

it('renders card item', () => {
    const { container } = render(<CardItem pokemon={data} />)
    expect(container).toMatchSnapshot()
  })
  
