import React from 'react';
import {
    PageDiv,
    Container,
    Header,
    ListDiv,
    Listing
} from './styles';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../languageContext';

export default function Products() {
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
                                        <h2>{item["title"]}</h2>
                                        <p>{item["description"]}</p>
                                        <p>${item["price"]}</p>
                                        <Link to={`/products/${item.prodId}`}>Learn more</Link>
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
