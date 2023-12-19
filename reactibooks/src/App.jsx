import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";

function App() {
	const navItems = ["Home", "About", "Browse"];
	const navLinks = ["#", "#", "#"];
	return (
		<div className="App">
			<MyNav items={navItems} links={navLinks}></MyNav>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
