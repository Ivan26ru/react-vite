import {render} from "@testing-library/react";
import {TableRow} from "../TableRow.tsx";
import {IPizza} from "../../../types/pizza.ts";

describe("Тестирование компонента TableRow", () => {
    test('Проверка рендеринга компонента TableRow', () => {
        const {container} = renderComponent();
        expect(container).toMatchSnapshot();
    })
});

const defaultProps = {
    onPizzaDelete: () => {
    },
    pizza: {
        id: 1,
        name: 'Пепперони',
        dough: 'толстое',
        size: 30,
        ingredients: [
            {
                id: 1,
                name: 'Салями',
                kcal: 300
            },
            {
                id: 2,
                name: 'Помидоры',
                kcal: 300
            }]
    } as IPizza,
}

const renderComponent = (props: any = {}) => {
    return render(
        <table>
            <tbody>
            <TableRow {...defaultProps} {...props} />
            </tbody>
        </table>
    )
}