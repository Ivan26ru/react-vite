import './index.scss';
import {createRoot} from "react-dom/client";
import {TermList} from "./TermList.tsx";

function saveTermList(terms) {
    localStorage.setItem("termList", JSON.stringify(terms));
}

function restoreLIst() {
    const rawTermList = localStorage.getItem("termList");
    if (!rawTermList) {
        return [];
    }

    return JSON.parse(rawTermList);
}

let terms = restoreLIst();

function addTerm(title, description) {
    terms.push({
        id: crypto.randomUUID(),
        title,
        description
    });

    terms.sort((term1, term2) => (term1.title < term2.title ? -1 : 1));

    syncTermList()
}

function syncTermList() {
    saveTermList(terms)
    reactRoot.render(<TermList terms={terms} onDelete={deleteItem}/>);
}

function deleteItem(id) {
    terms = terms.filter(term => term.id !== id);
    syncTermList()
}

const descriptionList = document.getElementById('description-list');
const reactRoot = createRoot(descriptionList);

syncTermList();

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
    // Отменяем поведение по умолчанию
    event.preventDefault();

    // Получаем значения полей формы
    const title = form.elements['title'].value;
    const description = form.elements['description'].value;

    // Сбрасываем форму
    form.reset();

    addTerm(title, description);
});
