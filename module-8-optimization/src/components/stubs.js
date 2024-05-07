// const createArray = (count) => new Array(count).fill().map((_, i) => i + 1);
const lastNames = ["Смирнов", "Иванов", "Кузнецов", "Соколов", "Попов", "Лебедев", "Козлов", "Новиков", "Морозов", "Петров", "Волков", "Соловьёв", "Васильев", "Зайцев", "Павлов", "Семёнов", "Голубев", "Виноградов", "Богданов", "Воробьёв", "Фёдоров", "Михайлов", "Беляев", "Тарасов", "Белов", "Комаров", "Орлов", "Киселёв", "Макаров", "Андреев", "Ковалёв", "Ильин", "Гусев", "Титов", "Кузьмин", "Кудрявцев", "Баранов", "Куликов", "Алексеев", "Степанов", "Яковлев", "Сорокин", "Сергеев", "Романов", "Захаров", "Борисов", "Королёв", "Герасимов", "Пономарёв", "Григорьев"];

const createArray = (count) => Array(count).fill().map(() => {
    const randomIndex = Math.floor(Math.random() * lastNames.length);
    const randomItem = lastNames[randomIndex];
    return {
        name: randomItem,
        salary: Math.floor(Math.random() * 9000000) + 1000
    }
})

export const salaryList = createArray(300000)

export const list = createArray(50000);
