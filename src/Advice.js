import { useState, useEffect } from 'react'
import classes from './Advice.module.css'
import desktop from './img/desktop.svg'
import dice from './img/dice.svg'

function Advice() {
	const [advice, setAdvice] = useState('')
	const [error, setError] = useState(null)
	const [counter, setCounter] = useState(-1)
	const [isDark, setIsDark] = useState(true)

	function fetchAdvice() {
		const url = `https://api.adviceslip.com/advice`
		setError(null)
		fetch(url)
			.then(response => {
				if (!response.ok) throw new Error('Something went wrong with fetching advice... Please try again')
				else return response.json()
			})
			.then(data => {
				setAdvice(data.slip.advice)
				setCounter(prev => prev + 1)
			})
			.catch(error => setError(error.message))
	}

	useEffect(() => {
		fetchAdvice()
		handleThemeSwitch()
	}, [])

	function handleThemeSwitch() {
		if (isDark) {
			document.documentElement.classList.remove('light-theme')
			document.documentElement.classList.add('dark-theme')
		} else {
			document.documentElement.classList.remove('dark-theme')
			document.documentElement.classList.add('light-theme')
		}
		setIsDark(prev => !prev)
	}

	return (
		<div className={classes.main}>
			<div className={classes.container}>
				<p className={classes.advice}>Advice # {counter}</p>
				{error}
				{!error && <p className={classes.text}>"{advice}"</p>}
				<img src={desktop} alt='line'></img>
			</div>
			<div onClick={fetchAdvice} className={classes.circle}>
				<img src={dice} alt='dice'></img>
			</div>
			<button onClick={handleThemeSwitch}>Switch theme</button>
		</div>
	)
}

export default Advice
