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

    const myArray: MyArray<number> = [1, 2, 3];

    interface MyArray<T> {
        [N: number]: T

    //     map<U>(fn: (el: T, index: number, arr: MyArray<T>)=>U):MyArray<U>
    }
    //
    // myArray.map()
    //
    // function identity<T>(arg: T): T {
    //     return arg;
    // }
    //
    // let result = identity(12);
    //
    // function getLen <T extends Array<any>>(arr: T):number{
    //     return arr.length;
    // }
    //
    // interface IValueWithType<T> {
    //     type: string;
    //     value: T
    // }
    //
    // function withType<U>(arg: U) : IValueWithType<U>{
    //     return {
    //         type: typeof arg,
    //         value: arg
    //     }
    // }
    //
    // const result2 = withType(123);


    interface IExample<T> {
        type: string;
        value: T;
        isEmpty: boolean;
    }

    const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {

    }

    const picked: Pick<IExample<number>, 'isEmpty'> ={

    }

    const partical: Partial<IExample<object>> = {

    }

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
