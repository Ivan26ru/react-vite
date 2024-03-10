import List from "./components/List.tsx";
import Button from "./components/Button.tsx";
import {M} from "vite/dist/node/types.d-jgA8ss1A";

const list = [{
    title: "title 123",
    name: "name asdfas;dlfkhja;sdkfj",
}, {
    title: "title 2",
    name: "name 2",
}, {
    title: "title 3",
    name: "name 3",
}
];

function App() {
    // const str = 'string';
    // const num = 2;
    // const obj = {};
    // const arr = [];
    // const null = null;
    // const sym = Symbol();
    // const und = undefined;
    // const _void = void 0;
    // const bool = true;
    // const fn = () => {};


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
