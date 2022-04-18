/** @jsxImportSource @emotion/react */
import {Card} from '../models/cards'
import {wrapper, cardStyling} from './Cards.css'

const Cards = ({cards}: {cards: Array<Card>}) => {
    return <div css={(theme) => wrapper(theme)}>
        {cards.map((card) =>
            <div
                css={(theme) => cardStyling(theme, card.backgroundcolor, card.color)}
                key={card.name}
            >
                <p>{card.name}</p>
            </div>
        )}
    </div>
}

export {Cards}
