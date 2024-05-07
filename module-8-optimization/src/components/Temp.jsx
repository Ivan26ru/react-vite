// Импортируем
import { useState, useMemo } from "react";
import "./styles.css";
import { createArray, slowFunction } from "./utils";

const ComponentC = ({ id }) => {
  const title = `Component C ${id}`;
  return (
    <div className="component">
      <h3>{title}</h3>
    </div>
  );
};

/** Пример тяжелого рендеринга */
const ComponentCList = () => {
  const list = createArray(50000);

  return (
    <div>
      {list.map((item) => (
        <ComponentC key={item} id={item} />
      ))}
    </div>
  );
};

/** Пример тяжелых вычислений */
const ComponentB = ({ count }) => {
  const startTime = performance.now();
  /* Ф-я, выполняющая достаточно трудоемкий код */
  const memoizedValue = useMemo(() => slowFunction(count), [count]);
  const finishTime = performance.now();

  return (
    <div className="component">
      <h3>Component B</h3>
      <p>{`Show memoized value: ${memoizedValue}`}</p>
      <p>{`Код выполнился за ${finishTime - startTime} миллисекунд`}</p>
    </div>
  );
};

const ComponentA = () => {
  /* Устанавливаем стейт счетчика */
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  /* Ф-я инкрементирует count */
  const onClick = () => setCount((currentCount) => currentCount + 1);
  /* Ф-я инкрементирует count 2*/
  const onClick2 = () => setCount2((currentCount) => currentCount + 1);

  return (
    <div className="component">
      <h3>Component A</h3>
      <p>{`State Count: ${count}`}</p>
      <p>{`State Count 2: ${count2}`}</p>
      <button className="button" onClick={onClick}>
        Update count 1
      </button>
      <button className="button" onClick={onClick2}>
        Update count2
      </button>
      <ComponentB count={count} />
    </div>
  );
};

export { ComponentA };
