import "./TermList.scss";
import {TermCard} from "./TermCard.tsx";

export const TermList = () => {
    return <ul className="term-list">
        <li>
            <TermCard
                title="React"
                description="Библиотека для создания пользотельских интерфейсов"
            />
        </li>

        <li>
            <TermCard
                title="React2"
                description="Би2блиотека для создания пользотельских интерфейсов"
            />
        </li>
    </ul>
}
