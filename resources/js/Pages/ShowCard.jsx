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

    const messageDelete = (e) => {
        const messageId = e.target.dataset.id;
        e.preventDefault();
        router.delete(`${post.id}/message/delete/${messageId}`, {
            method: 'delete'
        });
    } 

    const renderComments = useCallback(el => {
        return (<div key={el.id} className="comment_block">
            <span className="full_name">{el.name+' '+el.surname}:</span>
            <p className="comment_text">{el.text}</p>
            <p className="date_at_comment">{el.created_at}</p>
            {auth.user !== null && auth.user.isAdmin ? <form onSubmit={messageDelete} data-id={el.id}>
            <button className="closeModal" type="submit"></button>
            </form> : ''}
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

      function deletePost(e) {
        e.preventDefault();

        router.delete(`delete/post/${post.id}`, {
            method: 'DELETE'
        })
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
            <Container><h3>{post.title}</h3></Container>
            <Container><p>{post.subtitle}</p></Container>
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
            <hr />
            {auth.user !== null && auth.user.isAdmin ?<Form style={{margin: '10px 0'}} onSubmit={deletePost}>
                <Button variant="danger" type="submit">
                    Удалить пост
                </Button>
            </Form>
            : ''}
            </Container>
        </>
    );
}