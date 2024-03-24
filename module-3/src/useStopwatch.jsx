import {useState, useEffect} from "react";

export const Stopwatch = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const timerId = setInterval(() => {
			console.count('Stopwatch');
			setSeconds((seconds) => seconds + 1);
		}, 1000);

		//Функция очистки
		return () => {
			clearInterval(timerId)
		}
	}, []);

	return (
		<div>
			<span>Секундомер: </span> <b>{seconds}</b>
		</div>
	)
}

