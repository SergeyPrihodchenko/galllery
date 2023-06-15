import { Link } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarB({auth})
{
    return (<>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>ДВ</Navbar.Brand>
          <Nav className="me-auto">
          {auth.user ? '' : <Link className='link-navbarB' href='/register'>Регистрация</Link>}
          {auth.user ? <Link className='link-navbarB' method='POST' href='logout' as='button'>Выход</Link> : <Link className='link-navbarB' href='login' as='button'>Вход</Link>}
          {/* {auth.user.isAdmin ? <Link className='link-navbarB' href={route('dashboard')}>Панель приборов</Link> : ''} */}
          </Nav>
        </Container>
      </Navbar>
    </>);
}