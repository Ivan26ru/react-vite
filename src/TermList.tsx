import "./TermList.scss";
import {TermCard} from "./TermCard.tsx";

const terms = [
    {
        title: "title1",
        description: "desc1",
    },
    {
        title: "title2",
        description: "desc2"
    },
    {
        title: "title3",
    }
];
export const TermList = () => {
    return (<ul className="term-list">
        {terms.map((item) => (
            <li>
                <TermCard title={item.title} description={item.description}/>
            </li>
        ))}
    </ul>)
}
