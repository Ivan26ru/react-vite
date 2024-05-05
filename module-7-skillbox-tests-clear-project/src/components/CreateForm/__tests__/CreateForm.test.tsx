import '@testing-library/jest-dom';
import {fireEvent, render} from "@testing-library/react";
import {CreateForm} from "..";
import {TDough, TSize} from "../../../types/pizza";
import {getCurrentTime} from "../../../utils/getCurrentTime";
import {sendAnalytics} from "../../../utils/sendAnalytics";

const handleNameChangeMock = jest.fn();
const handleSizeMock = jest.fn();
const handleDougMock = jest.fn();
const handleIngredientsMock = jest.fn();
const onCreateMock = jest.fn();

const defaultProps = {
    name: '',
    size: 10 as TSize,
    dough: 'толстое' as TDough,
    ingredientsIds: [],
    disabled: true,
    handleNameChange: handleNameChangeMock,
    handleSize: handleSizeMock,
    handleDough: handleDougMock,
    handleIngredients: handleIngredientsMock,
    onCreate: onCreateMock,
}

const renderComponent = (props: any = {}) => {
    return render(<CreateForm {...defaultProps} {...props} />)
}

describe('CreateForm', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('Проверяем, что кнопка недоступна при рендере с дефолтными значениями', async () => {
        const {getByTestId} = renderComponent();

        expect(getByTestId('CreateButton')).toBeDisabled();
    });

    it('Проверяем, что состояние кнопки меняется при смене disabled на false ', async () => {
        const {getByTestId, rerender} = renderComponent();

        expect(getByTestId('CreateButton')).toBeDisabled();

        rerender(<CreateForm {...defaultProps} disabled={false}/>);

        expect(getByTestId('CreateButton')).not.toBeDisabled();
    });

    it('Проверяем, что вызывается метод отправки формы при нажатии кнопки ', async () => {
        const {getByTestId} = renderComponent({name: 'Супер пицца', disabled: false})

        await fireEvent.click(getByTestId('CreateButton'));

        expect(onCreateMock).toBeCalled()
    });

    it('Проверяем, что аналитика получает верные данные', async () => {
        (getCurrentTime as jest.Mock).mockReturnValue(111);
        const {getByTestId} = renderComponent();

        await fireEvent.input(getByTestId('NameInput'), {target: {value: 'супер пицца'}})
        await fireEvent.click(getByTestId('CreateButton'));

        expect(sendAnalytics).toBeCalledWith({
            page: "Main",
            type: 'desktop',
            pizza: {
                dough: 'толстое',
                id: expect.anything(),
                ingredients: [],
                name: 'супер пицца',
                size: 10,
            },
            time: 111,
        })
    });
});