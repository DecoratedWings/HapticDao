import React, {useState, useEffect} from 'react'
import TruflationCard from './TruflationCard'
import truflationABI from './utils/TruflationContract.json';
import { ethers } from "ethers";

const TruflationCardList = () => {

  const [foodInflation, setFoodInflation] = useState('');
  const [housingInflation, setHousingInflation] = useState('');


    const cardInfo = [
        {
            title: "Food",
            emoji:"🌾",
            description: `${foodInflation} %`,
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

    const contractAddress = "0xaE02354d16019b1A6dA8c2E184Fe9903cEacD785";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const truflationContract = new ethers.Contract(contractAddress, truflationABI, signer);


    async function getFoodInflation() {
      console.log("calling ... ")
      truflationContract.foodInflation().then(result=>{
        setFoodInflation(Number(result).toFixed(2));
        console.log("inflation is: ",result)
      });
    }

    useEffect(() => {
      getFoodInflation();
    }, []);


    const renderCard = (card, index) => {
        console.log(card);

        return (
          <TruflationCard key={index} title={card.title}  emoji={card.emoji} description={card.description}/>
        );
      };

  return (
      <div className='grid grid-cols-3 col-span-3'>
    {/* { console.log("Mapping is: ", hapticDAOContract.titleToCardMap())} */}
    {cardInfo.map(renderCard)}
    </div>
  )
}

export default TruflationCardList