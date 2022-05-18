import React from 'react'
import DaoCard from './DaoCard'

const DaoCardList = () => {
    const cardInfo = [
        {
            title: "Language Support",
            description: "Add additional languages to Haptic Dao",
        },
        {
            title: "Vibration Rate",
            description: "Increase the duration of the rate of success button vibration",
        },
        {
            title: "Mobile UI",
            description: "Improvements to the spacing and mobile UI design",
        },
    ]

    const renderCard = (card, index) => {
        console.log(card);

        return (
          <DaoCard key={index} title={card.title} description={card.description} />
        );
      };

  return (
      <div>
    {cardInfo.map(renderCard)}
    </div>
  )
}

export default DaoCardList