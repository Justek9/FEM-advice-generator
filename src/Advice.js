import { useState } from 'react'
import classes from './Advice.module.css'
import desktop from './img/desktop.svg'
import dice from './img/dice.svg'

function Advice() {
	const [advice, setAdvice] = useState('')
	const [error, setError] = useState(null)

	function fetchAdvice() {
		const url = `https://api.adviceslip.com/advice`
		fetch(url)
			.then(response => {
				if (!response.ok) throw new Error('Something went wrong with fetching advice... Please try again')
				else return response.json()
			})
			.then(data => setAdvice(data.slip.advice))
			.catch(error => setError(error.message))
	}
	return (
		<div className={classes.main}>
			<div className={classes.container}>
				<p className={classes.advice}>Advice # 1</p>
				{error}
				{!error && <p className={classes.text}>"{advice}"</p>}
				<img src={desktop} alt='line'></img>
			</div>
			<div onClick={fetchAdvice} className={classes.circle}>
				<img src={dice} alt='dice'></img>
			</div>
		</div>
	)
}

export default Advice
