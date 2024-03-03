import {useEffect, useRef, useState} from 'react';

export function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("first init");
	}, [count]);

	const btn = useRef();

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<button onClick={handleClick} ref={btn}>
			You pressed me {count} times
		</button>
	);
}

export default App;
