import React, {useState} from 'react'
import DaoCard from './DaoCard'

const DaoCardList = () => {
 
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);

    const cardInfo = [
        {
            title: "Language Support",
            description: "Add additional languages to Haptic Dao",
            score: score1
        },
        {
            title: "Vibration Rate",
            description: "Increase the duration of the rate of success button vibration",
            score: score2
          },
        {
            title: "Mobile UI",
            description: "Improvements to the spacing and mobile UI design",
            score: score3
        },
    ]

    const renderCard = (card, index) => {
        console.log(card);

        return (
          <DaoCard key={index} title={card.title} description={card.description} score={card.score}/>
        );
      };

  return (
      <div>
        
    {cardInfo.map(renderCard)}
    </div>
  )
}

export default DaoCardList