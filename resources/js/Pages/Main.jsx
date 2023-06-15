import NavbarB from "@/Components/NavbarB";
import Cards from "@/Components/Cards";
import { Container } from "react-bootstrap";

export default function Main({auth}) {
    return (
        <>
            <NavbarB auth={auth}/>
            <Container style={{marginTop: '10px'}}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </Container>
        </>
    );
}
