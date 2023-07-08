import {Button, Card } from "react-bootstrap"
import {Link} from "react-router-dom"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const quantity = 0
    return (

        <Card className="h-100">
            <Link to="/product">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
            </Link>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    {/* fs = font size */}
                    <span className="ms-2 text-muted">{price} €</span>
                </Card.Title>
                <div className="mt-auto d-flex align-items-center flex-column">
                    {quantity === 0 ? (
                        <Button className="w-50 ">Add to cart</Button>
                    ) : null}
                </div>
            </Card.Body>
        </Card>

    )
}