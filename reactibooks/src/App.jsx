import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";

function App() {
	return (
		<div className="App">
			<MyNav />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<AllTheBooks />
		</div>
	);
}

export default App;
