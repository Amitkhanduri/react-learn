import { Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import '../../stylesheets/Product.css';

export default function Product({ title, category, description, price, thumbnail, productId }) {


    return (
        <>
            <div className='product-layout'>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={thumbnail}
                        className='productImg'
                        top
                        width="10%"
                    />
                    <CardBody>
                        <Link to={`/product/${productId}`}>
                            <CardTitle tag="h5">
                                {title}
                            </CardTitle>
                        </Link>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {category}&nbsp; {price}$
                        </CardSubtitle>
                        <CardText>
                            {description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </>
    )

}