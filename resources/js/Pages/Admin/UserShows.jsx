import NavbarB from "@/Components/NavbarB";
import { Link } from "@inertiajs/react";
import { useCallback } from "react";
import Table from 'react-bootstrap/Table';

export default function UserShows({auth, users}) {
    console.log(users);
    const renderUsers = useCallback((el) => {
        return (
            <tr key={'tr'+el.id}>
                <td key={'name'+el.id}>{el.name}</td>
                <td key={'surname'+el.id}>{el.surname}</td>
                <td key={'email'+el.id}>{el.email}</td>
                <td key={el.id}>{el.isActive == 0 ? <Link as="button" href={route('admin.users.update', el.id)} method="post" style={{color:'rgb(199, 245, 130)'}}>Добавить</Link> : <Link as="button" method="delete" href={route('admin.users.delete', el.id)} style={{color:'rgb(248, 111, 111)'}}>Удалить</Link>}</td>
            </tr>
        );
    }, [users]);

    return (
        <>
            <NavbarB auth={auth}/>
            <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Действие</th>
            </tr>
        </thead>
        <tbody>
            {users.map((el) => renderUsers(el))}
        </tbody>
        </Table>
        </>
    );
}