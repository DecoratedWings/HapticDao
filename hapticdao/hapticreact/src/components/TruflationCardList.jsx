import React, {useState} from 'react'
import TruflationCard from './TruflationCard'

const TruflationCardList = () => {

    const cardInfo = [
        {
            title: "Food",
            emoji:"🌾",
            description: "14%",
        },
        {
            title: "Housing",
            emoji:"🏠",
            description: "15%",
          },
        {
            title: "Transportation ",
            emoji:"🚗",
            description: "16%",
        },
        {
          title: "Medical ",
          emoji:"🏥",
          description: "17%",
        },
        {
          title: "Education ",
          emoji:"📚",
          description: "18%",
        },
        {
          title: "Personal Items",
          emoji:"👨👩",
          description: "19%",
        },
    ]

    const renderCard = (card, index) => {
        console.log(card);

        return (
          <TruflationCard key={index} title={card.title}  emoji={card.emoji} description={card.description}/>
        );
      };

  return (
      <div className='grid grid-cols-3 col-span-3'>
        
    {cardInfo.map(renderCard)}
    </div>
  )
}

export default TruflationCardList