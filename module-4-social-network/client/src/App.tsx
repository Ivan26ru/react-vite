import './App.css';
import {FetchPostListView} from "./components/PostListView/FetchPostListView";
import {Account} from "./components/Account.tsx";

function App() {
    return (<div className="app">
        <Account/>
        <FetchPostListView/>
    </div>);
}

export default App;
