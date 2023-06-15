import { Link } from '@inertiajs/react';
import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
        <Card className="bg-dark text-white cardB">
            <Card.Img src="./storage/img_drink/ensht.jpg" alt="Card image" width='860px' height='300px'/>
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
  );
}

export default ImgOverlayExample;