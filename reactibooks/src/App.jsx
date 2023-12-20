import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
	return (
		<div className="App bg-dark">
			<MyNav />
			<Welcome />
			<AllTheBooks />
			<MyFooter />
		</div>
	);
}

export default App;
