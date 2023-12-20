import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";

function App() {
	return (
		<div className="App">
			<MyNav />

			<AllTheBooks />
		</div>
	);
}

export default App;
