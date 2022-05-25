import React, {useState} from 'react'
import TruflationCard from './TruflationCard'
import truflationYoyABI from './utils/TruflationContract.json';
import { ethers } from "ethers";

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

    const contractAddress = "0xA6D660d289509803FD16D478C5ae8Ef95cCE30BD";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const truflationContract = new ethers.Contract(contractAddress, truflationYoyABI, signer);


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