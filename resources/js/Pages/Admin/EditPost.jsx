import NavbarB from "@/Components/NavbarB";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function EditPost({auth}) {

    const [values, setValues] = useState({
        title: "",
        subtitle: "", 
        file: {}
      })

    const [file, setFile] = useState({});

    function handleFile(e) {
        const data = e.target.files[0];
        setFile(data);
    }

      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        setValues(values => ({
            ...values,
            'file': file 
        }));
        router.post('/editPost/add', values, {
            method: 'POST',
            forceFormData: true
        })
      }

    return (
        <>
            <NavbarB auth={auth}/>
            <Container>
            <Form onSubmit={handleSubmit} method="POST">
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" placeholder="Название" value={values.title} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="subtitle">
                <Form.Label>Описание</Form.Label>
                <Form.Control as='textarea' placeholder="Описание" value={values.text} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="file">
                <Form.Label>Картинка</Form.Label>
                <Form.Control type="file" placeholder="Картинка" onChange={handleFile}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Добавить
            </Button>
            </Form>
            </Container>
        </>
    );
}