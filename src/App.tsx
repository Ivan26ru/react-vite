import List from "./components/List.tsx";
import Button from "./components/Button.tsx";

const list = [{
    title: "title 123",
    name: "name asdfas;dlfkhja;sdkfj",
}, {
    title: "title 2",
    name: "name 2",
}];

function App() {

    console.log(333)

    return (
        <div>
            APP
            <ul>
                {list.map((
                    {name, title},
                    index) =>
                    <List key={index} name={name} title={title}/>
                )}
            </ul>

            <Button type={{color: 'red'}}>Название любое</Button>
        </div>)
}

export default App
