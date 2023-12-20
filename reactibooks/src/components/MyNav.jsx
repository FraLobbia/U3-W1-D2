import {
	Nav,
	Container,
	Navbar,
	Form,
	Row,
	Col,
	Button,
} from "react-bootstrap";
import navBarConfig from "./dataConfig/navBarConfig.json";
function MyNav() {
	return (
		<Navbar expand="md" className="bg-body-tertiary mb-3">
			<Container fluid>
				<Navbar.Brand href="#">Reactibooks</Navbar.Brand>
				<Navbar.Toggle
					className="ms-auto"
					aria-controls="basic-navbar-nav"
				/>

				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-between"
				>
					<Nav>
						{navBarConfig.map((navItem) => {
							return (
								<Nav.Link href={navItem.link}>
									{navItem.name}
								</Nav.Link>
							);
						})}
					</Nav>
					<Form>
						<Row>
							<Col xs="auto">
								<Form.Control
									type="text"
									placeholder="Cerca un libro qui"
									className="mr-sm-2"
								/>
							</Col>
							<Col xs="auto">
								<Button type="submit">Cerca</Button>
							</Col>
						</Row>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNav;
