type Props = {
  word: string
  guesses: string[]
}

export default function WordCard({ word, guesses }: Props) {
  // Fun javascript trick
  const wordLetters = word.split("") // ["f", "o", "l" .......]
  // [<div>f</div>, <div>o</div>, <div>l</div> ......]

  // Not great using the index as the key and I am ashamed
  return (
    <div className="fs-1">
      {wordLetters.map((letter, index) => (
        <span key={index}>
          { guesses.find(guess => guess === letter) ? letter : "_ "}
        </span>
      ))}
    </div>
  )
}


//`hello there ${ { id: 0, name: "natalie"} }`
//<MyComponent someProp={{ id: 0, name: "natalie" }}/>