import { Link } from '@inertiajs/react';
import Card from 'react-bootstrap/Card';

function ImgOverlayExample({posts}) {
  return (
        posts.map(el => {return (
            <Link key={el.id + 'link'} href={route('show', el.id)}>
            <Card key={el.id} className="bg-dark text-white cardB">
            <Card.Img src={'./storage/img_drink/'+el.img_drink} alt="Card image" width='860px' height='300px'/>
            <Card.ImgOverlay>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                {el.subtitle}
                </Card.Text>
            </Card.ImgOverlay>
            </Card>
          </Link>
        )})
  );
}

export default ImgOverlayExample;