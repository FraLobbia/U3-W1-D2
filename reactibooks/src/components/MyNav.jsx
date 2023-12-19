import Nav from "react-bootstrap/Nav";

function MyNav(props) {
	return (
		<Nav variant="tabs" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href={props.links["0"]}>{props.items["0"]}</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={props.links["1"]} eventKey="link-1">
					{props.items["1"]}
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={props.links["2"]} eventKey="link-2">
					{props.items["2"]}
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default MyNav;
