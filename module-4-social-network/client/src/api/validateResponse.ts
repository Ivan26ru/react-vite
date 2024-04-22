// Функция валидации запросов, если введен не верный пароль, то выкидывать ошибку, так как ответ от сервера - является положительным
export async function validateReponse(response: Response): Promise<Response> {
    if(!response.ok) {
        throw new Error(await response.text());
    }

    return response;
}