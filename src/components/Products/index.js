import React from 'react';
import {
    PageDiv,
    Container,
    Header,
    ListDiv,
    Listing
} from './styles';
import { Link } from 'react-router-dom';

export default function Products() {
    return (
        <PageDiv>
            <Container>
                <Header>Shop</Header>
                <ListDiv>
                    <Listing>
                        <img src="https://via.placeholder.com/300" alt="Product" />
                        <h2>Product name</h2>
                        <p>More info here</p>
                        <p>Price</p>
                        <Link to='/products/1001'>Learn more</Link>
                    </Listing>
                    <Listing>
                        <img src="https://via.placeholder.com/300" alt="Product" />
                        <h2>Product name</h2>
                        <p>More info here</p>
                        <p>Price</p>
                        <Link to='/products/1002'>Learn more</Link>
                    </Listing>
                    <Listing>
                        <img src="https://via.placeholder.com/300" alt="Product" />
                        <h2>Product name</h2>
                        <p>More info here</p>
                        <p>Price</p>
                        <Link to='/products/1003'>Learn more</Link>
                    </Listing>
                </ListDiv>
            </Container>
        </PageDiv>
    )
}
