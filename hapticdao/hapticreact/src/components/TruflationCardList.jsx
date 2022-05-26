import React, {useState, useEffect} from 'react'
import TruflationCard from './TruflationCard'
import truflationABI from './utils/TruflationContract.json';
import { ethers } from "ethers";

const TruflationCardList = () => {

 
  const [foodInflation, setFoodInflation] = useState('');
  const [housingInflation, setHousingInflation] = useState('');
  const [transportationInflation, setTransportationInflation] = useState('');
  const [medicalInflation, setMedicalInflation] = useState('');
  const [educationInflation, setEducationInflation] = useState('');
  const [personalItemsInflation, setPersonalItemsInflation] = useState('');

    const cardInfo = [
        {
            title: "Food",
            emoji:"🌾",
            description: `${foodInflation} %`,
        },
        {
            title: "Housing",
            emoji:"🏠",
            description: `${housingInflation} %`,
          },
        {
            title: "Transportation ",
            emoji:"🚗",
            description: `${transportationInflation} %`,
        },
        {
          title: "Medical ",
          emoji:"🏥",
          description: `${medicalInflation} %`,
        },
        {
          title: "Education ",
          emoji:"📚",
          description: `${educationInflation} %`,
        },
        {
          title: "Personal Items",
          emoji:"👨👩",
          description: `${personalItemsInflation} %`,
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
    async function getHousingInflation() {
      console.log("calling ... ")
      truflationContract.housingInflation().then(result=>{
        setHousingInflation(Number(result).toFixed(2));
        console.log("inflation is: ",result)
      });
    }
    async function getTransportationInflation() {
      console.log("calling ... ")
      truflationContract.transportationInflation().then(result=>{
        setTransportationInflation(Number(result).toFixed(2));
        console.log("inflation is: ",result)
      });
    }
    async function getMedicalInflation() {
      console.log("calling ... ")
      truflationContract.medicalInflation().then(result=>{
        setMedicalInflation(Number(result).toFixed(2));
        console.log("inflation is: ",result)
      });
    }
    async function getEducationInflation() {
      console.log("calling ... ")
      truflationContract.educationInflation().then(result=>{
        setEducationInflation(Number(result).toFixed(2));
        console.log("inflation is: ",result)
      });
    }
    async function getPersonalItemsInflation() {
      console.log("calling ... ")
      truflationContract.personalItemsInflation().then(result=>{
        setPersonalItemsInflation(Number(result).toFixed(2));
        console.log("inflation is: ",result)
      });
    }
    
    useEffect(() => {
      getFoodInflation();
      getHousingInflation();
      getTransportationInflation();
      getMedicalInflation();
      getEducationInflation();
      getPersonalItemsInflation();
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