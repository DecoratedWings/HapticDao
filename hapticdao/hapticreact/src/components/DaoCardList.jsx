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
        {
          title: "Host Cards on an endpoint",
          description: "Allow users to get/post requests to json list of improvements",
          score: score3
        },
        {
          title: "Database of Users",
          description: "Add DB of Users so can transfer funds between users in your contacts",
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
      <div className='grid grid-cols-3 col-span-1'>
        
    {cardInfo.map(renderCard)}
    </div>
  )
}

export default DaoCardList