
export type Card = {
    name: string
    color: string
    backgroundcolor: string
}

const cards: Array<Card> = [
    {
        name: 'Blue',
        color: 'white',
        backgroundcolor: 'blue'
    },
    {
        name: 'Red',
        backgroundcolor: 'red',
        color: 'white'
    },
    {
        name: 'Brown',
        backgroundcolor: 'brown',
        color: 'white'
    }
]

export {cards}