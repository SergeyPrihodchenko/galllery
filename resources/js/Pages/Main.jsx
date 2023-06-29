import NavbarB from "@/Components/NavbarB";
import Cards from "@/Components/Cards";
import { Container } from "react-bootstrap";

export default function Main({auth, posts}) {

    return (
        <>
            <NavbarB auth={auth}/>
            <Container style={{marginTop: '10px'}}>
                {posts.length == 0 ? '' : <Cards posts={posts}/>}
            </Container>
        </>
    );
}
