import NavbarB from "@/Components/NavbarB";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {validate, checkFile} from '@/function/functions';

export default function EditPost({auth}) {

    const [fileName, setFileName] = useState('');
    const [checkInput, setCheckInput] = useState(false);
    const [alert, setAlert] = useState(false);
    const [values, setValues] = useState({
        title: "",
        subtitle: "", 
        file: {}
      })

    function handleFile(e)  {
        setFileName(e.target.value);
        let file = e.target.files[0];
        e.target.classList.remove('form-validate');
        setCheckInput(checkFile(e));
        setValues(values => ({
            ...values,
            'file': file
        }))
    }

    

      function handleChange(e) {
        setAlert(false);
        const key = e.target.id;
        const value = e.target.value
        e.target.classList.remove('form-validate');
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        validate(e)
        e.preventDefault()
        if(!checkInput) { 
            return
        } else {
            router.post('/editPost/add', values, {
                method: 'POST',
                forceFormData: true
            })
            setValues(values => ({
                ...values,
                title: "",
                subtitle: "", 
                file: {}
            }));
            setFileName('');
            setAlert(true);
        }
    }

    
    return (
        <>
        <style type="text/css">
        {`
            .form-validate {
                background-color: rgb(219, 117, 117)
            }
            .form-alert {
                display: none
            }
        `}
      </style>
            <NavbarB auth={auth}/>
            <Container>
            {alert ? <Alert variant='success'>
          Публикация добавлена
        </Alert> : ''}
            <Form onSubmit={handleSubmit} onClick={validate} method="POST">
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Название</Form.Label>
                <Form.Control className="form-control" type="text" placeholder="Название" value={values.title} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="subtitle">
                <Form.Label>Описание</Form.Label>
                <Form.Control className="form-control" as='textarea' placeholder="Описание" value={values.subtitle} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="file">
                <Form.Label>Картинка</Form.Label>
                <Form.Control className="form-control" type="file" placeholder="Картинка" value={fileName} onChange={handleFile}/>
                
            </Form.Group>
            {checkInput ? '' : <Alert variant='warning'>
          Не допустимый формат файла. Возможные форматы: ''.jpg','.png','.bmp','.psd'
        </Alert>}
            <Button variant="primary" type="submit">
                Добавить
            </Button>
            </Form>
            </Container>
        </>
    );
}