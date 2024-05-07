// Импортируем
import {memo, useState} from "react";
import "./styles.css";
import {list} from "./stubs";
import {slowFunction} from "./utils";

const ComponentC = (({id}) => {
    const title = `Component C ${id}`;
    return (
        <div className="component">
            <h3>{title}</h3>
        </div>
    );
});


/** Пример тяжелого рендеринга */
const ComponentCList = () => {
    return (
        <div>
            {
                list.map((item) => (
                    <ComponentC key={item} id={item}/>
                ))
            }
        </div>
    );
};


/** Пример тяжелых вычислений */
const ComponentB = memo(({count}) => {
    const startTime = performance.now();
    /* Ф-я, выполняющая достаточно трудоемкий код */
    const value = slowFunction(count)
    const finishTime = performance.now();

    return (
        <div className="component">
            <h3>Memo Component B</h3>
            <p>{`Show value: ${value}`}</p>
            <p>{`Код выполнился за ${finishTime - startTime} миллисекунд`}</p>
        </div>
    );
})

const Wrapper = ({children}) => {
    const [count, setCount] = useState(0);

    /* Ф-я инкрементирует count */
    const onClick = () => setCount((currentCount) => currentCount + 1);
    const isBlack = count % 2 === 0


    return (
        <div className="component" style={isBlack ? {backgroundColor: "#000000"} : {backgroundColor: "initial"}}>
            <h3>Component A</h3>
            <p>{`State Count 1: ${count}`}</p>
            <button className="button" onClick={onClick}>
                Update count 1
            </button>
            {children}
        </div>
    );
};


const ComponentA = () => {
    return (
        <Wrapper>
            <ComponentB/>
        </Wrapper>
    );
};

export {ComponentA};
