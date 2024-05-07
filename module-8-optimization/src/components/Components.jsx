// Импортируем
import { useState, useMemo, useEffect } from "react";
import "./styles.css";
import { slowFunction } from "./utils";

const useCheckUpdates = () => {
  useEffect(() => {
    console.count("Render");
  });
};

const cache = new Map();

/* Ф-я кеширования */
function calculate(count) {
  const key = JSON.stringify(count); // использование JSON для преобразования в строку
  /* Если есть ключ, возвращаем из кеша */
  if (cache.has(key)) {
    return cache.get(key);
  }

  /* Если нет, то выполняется наша тяжелая ф-я подсчетов */
  const result = slowFunction(count);
  /* Добавляется новый ключ */
  cache.set(key, result);
  return result;
}

/** Пример тяжелых вычислений */
const ComponentB = ({ count }) => {
  const startTime = performance.now();
  /* Наша тяжелая ф-я подсчетов */
  const value = calculate(count);
  const finishTime = performance.now();

  return (
    <div className="component">
      <h3>Component B</h3>
      <p>{`Sum salary: ${value.fullSalary} ₽`}</p>
      <p>{`Max salary: ${value.maxElement.name}  ${value.maxElement.salary} ₽`}</p>
      <p>{`Min salary: ${value.minElement.name}  ${value.minElement.salary} ₽`}</p>
      <p>{`Top 5 Max salary: ${value.formattedSsortedDownArray}`}</p>
      <p>{`Top 5 Min salary: ${value.formattedSortedUpArray}`}</p>
      <p>{`Код выполнился за ${finishTime - startTime} миллисекунд`}</p>
      <p>{`State Count: ${count}`}</p>
    </div>
  );
};

const ComponentA = () => {
  /* Устанавливаем стейт счетчика */
  const [count, setCount] = useState(1);

  /* Ф-я инкрементирует count */
  const onClick = () => setCount((currentCount) => currentCount + 1);
  /* Ф-я инкрементирует count */
  const onClick2 = () => setCount((currentCount) => currentCount - 1);

  return (
    <div className="component">
      <h3>Component A</h3>
      <button className="button" onClick={onClick}>
        Inc count 1
      </button>
      <button className="button" onClick={onClick2}>
        Dec count 2
      </button>
      <ComponentB count={count} />
    </div>
  );
};

export { ComponentA };
