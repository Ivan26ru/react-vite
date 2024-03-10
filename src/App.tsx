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

    // type stringOrNumber = string | number;
    // const stringNumber: stringOrNumber;

    // function subJS(arr :number[]) {
    //     return arr.concat([1])
    // }
    //
    // console.log(subJS([1,2,3,4,5,6,7]));
    //
    // const tsNubmer = 2;
    // const tsString = 'str';
    //
    // const result = tsString + tsNubmer;

    // ограниченно количество элементов в массивы
    // const myTuple: [number, string] = [1, '2'];
    // const val = myTuple[1];

//     Object
//     interface MyFirstInterface {
//         readonly a: number;
//         b: string;
//         c: number[];
//     }
//
//     const myObj2: MyFirstInterface = {
//         a: 2,
//         b: '123',
//         c: [1]
//     }
//
//     myObj2.a = 5;
//
// // IndexInterface (Позволяет определять типы из интерфейса)
//     interface IndexInterface {
//         [N: string]: string;
//     }
//
//     const ApiAnswer: IndexInterface = {key: 'asdf', key1: 'asd'}
//
//     const val3 = ApiAnswer.randomkey; // ожидает строку

    // enum Methods {
    //     add,
    //     sub,
    // }
    //
    // function calculate(method: Methods, left: number, right: number): number {
    //     switch (method) {
    //         case Methods.add:
    //             return left + right;
    //         case Methods.sub:
    //             return left - right;
    //     }
    // }
    //
    // const sum = calculate(Methods.sub, 2, 3);
    //
    // type TypeFn = () => number
    //
    // type StrangeTsTypes = any | unknown | never;
    //
    // const some: any = '2';
    //
    // const un: unknown = '2';
    //
    // function neverFn(): never{
    //     throw new Error('myexception');
    // }
    // some.reduce()

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
