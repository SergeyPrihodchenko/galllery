import NavbarB from "@/Components/NavbarB";
import { Accordion, Button, Card, Container, Form } from "react-bootstrap";

export default function ShowCard({auth, post}) {
    return (
        <>
        <NavbarB auth={auth}/>
        <Container>
        {auth.user.isActive ? <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header>Комментарии</Accordion.Header>
                    <Accordion.Body style={{height: '200px', overflow: 'auto', scrollbarWidth: 'thin' }}>
                        <p>Lorem ipsum dolor sit amet</p> 
                        <p>Lorem ipsum dolor sit amet</p> 
                        <p>Lorem ipsum dolor sit amet</p> 
                        <p>Lorem ipsum dolor sit amet</p> 
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>Lorem ipsum dolor sit amet</p> 
                        <p>Lorem ipsum dolor sit amet</p> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> : ''}
            <Card className="bg-dark text-white cardB">
            <Card.Img src={'/storage/img_drink/'+post.img_drink} alt="Card image" width='860px' height='300px'/>
            </Card>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Отзыв</Form.Label>
                    <Form.Control as='textarea' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        </>
    );
}