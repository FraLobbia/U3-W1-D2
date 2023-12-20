import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

function AllTheBooks(props) {
	console.log(fantasy);
	return (
		<Container>
			<Row>
				{fantasy.map((book) => {
					return (
						<Col xs={6} md={4} lg={3} className="card-group my-2">
							<Card>
								<Card.Img variant="top" src={book.img} />
								<Card.Body className="d-flex flex-column justify-content-start">
									<Card.Title>{book.title}</Card.Title>
									<Card.Text>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</Card.Text>
									<Button
										variant="success"
										className="mt-auto"
									>
										Compra
									</Button>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}
export default AllTheBooks;
