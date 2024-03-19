import {useState} from "react";

const Form = () => {

	// Создаем состояние с объектом
	const [user, setUser] = useState({
		firstName: "Иван",
		lastName: "Иванов"
	});

	const handleFirstNameChange = (event) => {
		setUser({
			...user,
			firstName: event.target.value
		});
	}

	return (
		<form>
			<input type="text" value={user.firstName} onChange={handleFirstNameChange}/>
		</form>
	);
}
