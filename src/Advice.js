import classes from './Advice.module.css'
import desktop from './img/desktop.svg'
import dice from './img/dice.svg'

function Advice() {
	function handleClick() {
		console.log('clicked')
	}
	return (
		<div className={classes.main}>
			<div className={classes.container}>
				<p className={classes.advice}>Advice # 1</p>
				<p>"Lorem ipsum"</p>
				<img src={desktop} alt='line'></img>
			</div>
			<div onClick={handleClick} className={classes.circle}>
				<img src={dice} alt='dice'></img>
			</div>
		</div>
	)
}

export default Advice
