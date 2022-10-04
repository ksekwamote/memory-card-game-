import './App.css';
import { createContext, useState } from 'react';
import { cardImages } from './components/cards/variables';
import CardContainer from './components/cards/CardContainer';
import _ from 'lodash'

export const CardContext = createContext(cardImages)

function App() {

  const [images , setImages] = useState(cardImages)
  const [clicked , setClicked] = useState([])
  const [gameOver , setGameOver] = useState(false)


  const shuffleImages = (cardId)=> {
    if( gameOver || clicked.includes(cardId)) return setGameOver(true)
    setClicked([...clicked , cardId])
    setImages(_.shuffle(cardImages))
  }

  const resetGame =() => {
      setClicked([])
      setGameOver(false)
  }

  return (
    <CardContext.Provider value={{images , 
    shuffleImages ,
     resetGame ,
     gameOver , 
     clicked
     }}>
      <CardContainer/>
    </CardContext.Provider>
  );
}

export default App;
