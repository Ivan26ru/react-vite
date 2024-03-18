import './App.css'
import {SearchableList} from "./SearchableList.jsx";

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
			<SearchableList list={list}/>
	)
}

export default App
