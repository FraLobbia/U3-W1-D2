import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNav() {
	return (
		<Nav variant="tabs" bg="dark" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href="#">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" eventKey="link-1">
					About
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="#" eventKey="link-2">
					Browse
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default MyNav;
