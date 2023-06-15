import NavbarB from "@/Components/NavbarB";
import { useCallback } from "react";
import Table from 'react-bootstrap/Table';

export default function UserShows({auth, users}) {
    const renderUsers = useCallback((el) => {
        return (
            <tr key={el.id}>
                <td key={el.id}>{el.name}</td>
                <td key={el.id}>{el.surname}</td>
                <td key={el.id}>{el.email}</td>
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
            <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            {users.map((el) => renderUsers(el))}
        </tbody>
        </Table>
        </>
    );
}