import React, {useState, useEffect} from 'react'
import DaoCard from './DaoCard'
import hapticDAO from './utils/HapticDao.json';
import { ethers } from "ethers";

const DaoCardList = () => {
  // let arrDaoCards = [];

  const [arrDaoCards, setArrDaoCards] = useState([]);

    const cardInfo = [
        {
            title: "Language Support",
            description: "Add additional languages to Haptic Dao",
            score: 0
        },
        {
            title: "Vibration Rate",
            description: "Increase the duration of the rate of success button vibration",
            score: 0
          },
        {
            title: "Mobile UI",
            description: "Improvements to the spacing and mobile UI design",
            score: 0
        },
        {
          title: "Host Cards on an endpoint",
          description: "Allow users to get/post requests to json list of improvements",
          score: 0
        },
        {
          title: "Database of Users",
          description: "Add DB of Users so can transfer funds between users in your contacts",
          score: 0
        },
    ]

        const contractAddress = "0x49Bf054E5Dc02998ECd4C31F94cAB38821c5983f";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const hapticDAOContract = new ethers.Contract(contractAddress, hapticDAO.abi, signer);
    

    const renderCard = (card, index) => {
        console.log(card);

        return (
          <DaoCard key={index} title={card.title} description={card.description} score={card.score}/>
        );
      };

      // useEffect ( () => {
      //   getCards();
      // }, []);
      useEffect(() => {
        getCards();
      }, []); // Good!

      async function getCards() {
        const amountCards = await hapticDAOContract.getAmountCards();
        console.log("Amount of cards: ", amountCards);
        let cardsArr = [];
        for(let i=0; i< amountCards; i++){
          //  arrDaoCards.push(await hapticDAOContract.daoCards(i));
           let entry = await hapticDAOContract.daoCards(i);
           let mapItem = await hapticDAOContract.titleToCardMap(entry.title);
           
           cardsArr.push({
                             title: entry.title, 
                             description: entry.description, 
                             score: Number(mapItem.score)
                            });
          console.log("Entry at ", i, " is ", cardsArr[i]);
          console.log("CARDINFO at ", i, " is ", cardInfo[i]);
          
        }
        console.log("CARDSARR:  ", cardsArr);
        setArrDaoCards(cardsArr);

      }

      const renderDaoCard = (card, index) => {
        console.log("dao card rendering: ",card);

        return (
          <DaoCard key={index} title={card.title} description={card.description} score={card.score}/>
        );
      };

  return (
      <div className='grid grid-cols-3 col-span-1'>
        {/* {getCards} */}
        {console.log("ENTIRE ARRAY IS ", arrDaoCards)}
        {arrDaoCards.map(renderCard)}
        {/* {arrDaoCards.map(
          (item) => {
            {console.log("ITEM IS ", item);}

            return (
              <DaoCard key={item.title} title={item.title} description={item.description} score={item.score}/>
            );
          }
        )} */}
    </div>
  )
}

export default DaoCardList