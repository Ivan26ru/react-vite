import "./TermList.scss";
import {TermCard} from "./TermCard.tsx";

export const TermList = ({terms}) => {
    return (<ul className="term-list">
        {terms.map((item) => (
            <li>
                <TermCard title={item.title} description={item.description}/>
            </li>
        ))}
    </ul>)
}
