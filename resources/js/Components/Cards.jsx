import { Link } from '@inertiajs/react';
import Card from 'react-bootstrap/Card';

function ImgOverlayExample({posts}) {
  return (
        posts.map(el => {return (
            <Link key={el.id + 'link'} href={route('show', el.id)}>
            <Card key={el.id} className="bg-dark text-white cardB">
            <Card.Img src={'./storage/img_drink/'+el.img_drink} alt="Card image" width='860px' height='300px'/>
            <Card.ImgOverlay>
                <Card.Title className='text_content'><h5 className='text_title'>{el.title}</h5></Card.Title>
                <Card.Text className='text_content'>
                {el.subtitle.slice(0, 200) + '...'}
                </Card.Text>
            </Card.ImgOverlay>
            <div className='back_fon'></div>
            </Card>
          </Link>
        )})
  );
}

export default ImgOverlayExample;