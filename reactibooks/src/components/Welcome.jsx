import Alert from "react-bootstrap/Alert";

function Welcome() {
	return (
		<Alert variant="info">
			<Alert.Heading>Welcome to Reactibooks!</Alert.Heading>
			<p className="mb-0">Libri di ogni tipo!</p>
		</Alert>
	);
}

export default Welcome;
