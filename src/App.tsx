import List from "./components/List.tsx";
import Button from "./components/Button.tsx";
import {M} from "vite/dist/node/types.d-jgA8ss1A";
import React from "react";

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

    class Constructor {
        public field: number = 123;
        private privateField: number = 123;

        constructor(arg: number) {
            this.field = arg;
        }

        public publicMethod() {
            return this.field;
        }

        protected protectedMethod(): number {
            return this.field + 10
        }

        private privateMethod(): number {
            return this.field + 30;
        }
    }

    const instanse = new Constructor(123);

    abstract class AbstractClass {
        public abstract abstractField: number;

        public abstract abstractMethod(): number;

        protected protectedMethod(){
            return this.abstractField;
        }
    }

    class NewChild extends AbstractClass{
        public abstractField: number = 123;

        public abstractMethod(): number {
            return this.protectedMethod();
        }
    }


    interface MyInterface{
        field: string;

        method(): string;
    }

    class NewClass implements MyInterface {
        public field: string = '123';

        public method(): string{
            return '';
        }
    }

    class MyComponent extends React.Component<{ prop1:number }, { state1: string }>{
        constructor(props: {prop1:number}) {
            super(props);
            this.state = {
                state1: '123'
            }
        }

        public render() {
            return (
                <div>{this.props.prop1}</div>
            )
        }
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
    </div>
)
}

export default App
