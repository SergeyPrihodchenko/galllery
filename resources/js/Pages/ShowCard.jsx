import NavbarB from "@/Components/NavbarB";
import { router } from "@inertiajs/react";
import { useCallback } from "react";
import { useState } from "react";
import { Accordion, Button, Card, Container, Form } from "react-bootstrap";

export default function ShowCard({auth, post, comments}) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        let value = e.target.value;
        setText(value);
    }

    const renderComments = useCallback(el => {
        return (<div key={el.id} className="comment_block">
            <span>{el.name+' '+el.surname}:</span>
            <p>{el.text}</p>
            <p>{el.created_at}</p>
            <hr/>
        </div>);
    });

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            user_id: auth.user.id,
            drink_id: post.id,
            text: text
        }
        router.post('/comment/add', data, {
            method: 'POST'
        });
        setText('');
      }

    return (
        <>
        <NavbarB auth={auth}/>
        <Container>
        {auth.user !== null && auth.user.isActive ? <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header>Комментарии</Accordion.Header>
                    <Accordion.Body style={{height: '200px', overflow: 'auto', scrollbarWidth: 'auto' }}>
                        {comments.map(el => renderComments(el))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> : ''}
            <Card className="bg-dark text-white cardB">
            <Card.Img src={'/storage/img_drink/'+post.img_drink} alt="Card image" width='860px' height='300px'/>
            </Card>
            <hr />
            {auth.user !== null && auth.user.isActive ? <Form onSubmit={handleSubmit} method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Отзыв</Form.Label>
                    <Form.Control as='textarea' name="text" value={text} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Отправить
                </Button>
            </Form>
            : ''}
            </Container>
        </>
    );
}