import {ReactElement, createContext, useContext, useState, useEffect} from "react";
import { IPage, IPageProvider, IPageProviderProps } from "./interfaces";

const PagesContext = createContext<IPageProvider | null>(null);

export function PagesProvider({ children }: IPageProviderProps): ReactElement {
	const [page, setPage] = useState<IPage>({
		name: "/",
	});

	const navigate = (name: string) => {
		window.history.pushState(null, "", name);
		setPage({ name });
	};

	useEffect(() => {
		const handlePopstet = ()=>{
			setPage({
				name: window.location.pathname
			});
		}

		window.addEventListener('popstate', handlePopstet);

		return ()=>{
			window.removeEventListener('popstate', handlePopstet);// очистка слушателя
		}
	}, []);

	return (
		<PagesContext.Provider value={{ ...page, navigate }}>
			{children}
		</PagesContext.Provider>
	);
}

export function usePages(): IPageProvider {
	const pages = useContext(PagesContext);

	if (!pages) {
		throw new Error("pages not found");
	}

	return pages;
}
