import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Nämä eivät muuten ole anekdootteja vaan pikemminkin aforismeja tai mietelauseita... ;)

const App = (props) => {

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Int8Array(6))

    const vote = () => {
        const votesCopy = [...votes]
        votesCopy[selected] += 1
        return (setVotes(votesCopy))
    }

    return (
        <div>
            <h1>Päivän lainaus</h1>
            <div>
                {props.anecdotes[selected]}
            </div>
            <div>
                Tällä lainauksella on {votes[selected]} ääntä.
            </div>
            <Button
                handleClick={() => vote()}
                text='Äänestä'
            />
            <Button
                handleClick={() => setSelected(Math.floor(Math.random() * 6))}
                text='Seuraava lainaus'
            />
            <h1>Suosituin lainaus</h1>
            <CheckMostVoted votes={votes} anecdotes={anecdotes} />
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const CheckMostVoted = ({ votes, anecdotes }) => {
    let mostVoted = votes[0]
    let indexOfMostVoted = 0

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] > mostVoted) {
            mostVoted = votes[i]
            indexOfMostVoted = i
        }
    }
    return (
        <>
            <div>{anecdotes[indexOfMostVoted]}</div>
            <div>Tällä lainauksella on {mostVoted} ääntä.</div>
        </>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)