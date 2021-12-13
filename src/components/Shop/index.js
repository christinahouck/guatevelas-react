import React from 'react';
import {
    PageDiv,
    Container,
    ColorSelectCont,
    Header,
    ListDiv,
    Listing,
    Title,
    Tagline,
    MoreColorsContainer,
    OtherColor,
    ProdImage
} from './styles';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../languageContext';
import ProdImgSwiper from '../ProductPages/ProdImgSwiper';
import ColorSelect from '../ProductPages/ColorSelect/index';

class Shop extends React.Component {
    render(props) {
        return (
            <LanguageContext.Consumer>
                {theme => (
                    <PageDiv>
                        <ColorSelectCont>
                            <ColorSelect titles="true" prodId={theme["productPage"]["prodDictionary"][0]} toggleColor={this.props.toggleColor}></ColorSelect>
                        </ColorSelectCont>
                        <Container>
                            <Header>{theme.nav.shop}</Header>
                            <ListDiv>
                                { theme["productPage"]["prodDictionary"].map((item, index) => {
                                    return (
                                        <Listing key={`listing${index}`}>
                                            <ProdImgSwiper product={item} color={this.props.color} colorIndex={this.props.colorIndex} />
                                            <Title>{item["title"]}</Title>
                                            <Tagline>{item["tagline"]}</Tagline>
                                            <Link to={`/products/${item.prodId}`} className="listing-link">{theme["productPage"]["learnMore"]}</Link>
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
}
export default Shop;
