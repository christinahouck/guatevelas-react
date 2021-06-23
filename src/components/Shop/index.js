import React from 'react';
import {
    PageDiv,
    Container,
    Header,
    ListDiv,
    Listing,
    Title,
    Tagline,
    Price
} from './styles';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../languageContext';

export default function Shop() {
    return (
        <LanguageContext.Consumer>
            {theme => (
                <PageDiv>
                    <Container>
                        <Header>Shop</Header>
                        <ListDiv>
                            { theme["productPage"]["prodDictionary"].map((item, index) => {
                                return (
                                    <Listing key={`listing${index}`}>
                                        <img src={item["prodImages"][0]} alt="Product" />
                                        <Title>{item["title"]}</Title>
                                        <Tagline>{item["tagline"]}</Tagline>
                                        <Price>${item["price"]}</Price>
                                        <Link to={`/products/${item.prodId}`} className="listing-link">Learn more</Link>
                                    </Listing>
                                )
                            })}
                        </ListDiv>
                    </Container>
                </PageDiv>
            )}
        </LanguageContext.Consumer>
    )
}
