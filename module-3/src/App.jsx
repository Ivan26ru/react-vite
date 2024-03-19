import './App.css'
import {SearchableList} from "./SearchableList.jsx";
import {FocusableInput} from "./FocusableInput.jsx";
import {Stopwatch} from "./Stopwatch.jsx";

const list = [
	{
		id: "1",
		title: "Арбуз"
	},
	{
		id: "2",
		title: "Огурец"
	},
	{
		id: "3",
		title: "Свёкла"
	}
]
function App() {
	return (
		<>
			<SearchableList list={list}/>
			<hr/>
			<FocusableInput/>
			<hr/>
			<Stopwatch/>
		</>
	);
}

export default App
