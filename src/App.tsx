import { useEffect, useState } from "react"
import LetterOptions from "./components/LetterOptions"
import Man from "./components/Man"
import WordCard from "./components/WordCard"
import { getRandomWord } from "./components/randomWords"
import WordForm from "./components/WordForm"

export default function App() {
  const [word, setWord] = useState("follicles")
  const [guesses, setGuesses] = useState(["a", "l", "c"])
  const [message, setMessage] = useState("")

  // if(word has changed) {
  //   // this would run in the middle of rendering
  // }
  // nothing asynchronous

  // use effect always runs AFTER rendering is finished
  useEffect(() => {
    console.log("I'm running")
    // asynchronous stuff goes in here (with some caveats)
  }, [word]) // only run again when word has changed since the last render

  const resetGame = () => {
    // set the word to a new word "rubber"
    // asynchronous stuff can go in here
    const newWord = getRandomWord()
    setWord(newWord)
    setMessage("")
    setGuesses([])
  }

  const addLetter = (letterToAdd: string) => {
    const newGuesses = [...guesses, letterToAdd]
    setGuesses(newGuesses)

    // Check if game is over
    // word.split("") -> ["f", "o", "l"]
    // guesses will be all the guesses but the most recent one
    if(word.split("").every(letter => newGuesses.includes(letter))) {
      setMessage("YOU WON!")
    }
    // TODO: also check if you've made too many wrong guesses
  }

  return (
    <div>
      <Man/>
      <WordForm onSubmit={setWord} word={word}/>
      <WordCard word={word} guesses={guesses}/>
      <LetterOptions letters={guesses} onLetterClick={addLetter}/>
      { message && <p>{message}</p>}
      <button onClick={resetGame}>New Game</button>
    </div>
  )
}