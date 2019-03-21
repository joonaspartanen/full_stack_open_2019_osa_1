import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({ good, neutral, bad }) => {

    const yhteensa = good + neutral + bad
    const keskiarvo = (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
    const positiivisia = good / yhteensa * 100 + " %"

    if (yhteensa === 0) {
        return (
            <p>Ei yhtään palautetta annettu</p>
        )
    }

    return (
        <table>
            <tbody>
                <Statistic state={good} text="hyvä" />
                <Statistic state={neutral} text="neutraali" />
                <Statistic state={bad} text="huono" />
                <Statistic state={yhteensa} text="yhteensä" />
                <Statistic state={keskiarvo} text="keskiarvo" />
                <Statistic state={positiivisia} text="positiivisia" />
            </tbody>
        </table>
    )
}

const Statistic = ({ state, text }) => {
    return (
        <tr>
            <td>{text}</td><td>{state}</td>
        </tr>
    )
}



const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Anna palautetta</h1>
            <div>
                <Button
                    handleClick={() => setGood(good + 1)}
                    text='HYVÄ'
                />
                <Button
                    handleClick={() => setNeutral(neutral + 1)}
                    text='NEUTRAALI'
                />
                <Button
                    handleClick={() => setBad(bad + 1)}
                    text='HUONO'
                />
            </div>
            <h1>Statistiikka</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)