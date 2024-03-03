import {useEffect, useRef, useState} from 'react';
import List from "./components/list.jsx";

const list = [{
	title: "title 123",
	name: "name asdfas;dlfkhja;sdkfj",
}, {
	title: "title 2",
	name: "name 2",
}];

export function App() {

	return (
		<div>
			APP
			<ul>
				{list.map((
					el,
					index) =>
					<List key={index} el={el}/>
				)}
			</ul>
		</div>
	);
}

export default App;
