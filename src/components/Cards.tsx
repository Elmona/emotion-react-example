/** @jsxImportSource @emotion/react */
import {Card} from '../models/cards'
import {wrapper, cardStyling} from './Cards.css'

const Cards = ({cards}: {cards: Array<Card>}) => {
    return <div css={(t) => wrapper(t)}>
        {cards.map((card) =>
            <div
                css={(t) => cardStyling(t, card.backgroundcolor, card.color)}
                key={card.name}
            >
                <p>{card.name}</p>
            </div>
        )}
    </div>
}

export {Cards}
