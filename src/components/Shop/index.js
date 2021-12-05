import React from 'react';
import {
    PageDiv,
    Container,
    Header,
    ListDiv,
    Listing,
    Title,
    Tagline,
    MoreColorsContainer,
    OtherColor,
    MoreColorsText,
    ProdImage
} from './styles';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../languageContext';
// import Fade from 'react-reveal/Fade';

export default function Shop() {
    return (
        <LanguageContext.Consumer>
            {theme => (
                <PageDiv>
                    <Container>
                        <Header>{theme.nav.shop}</Header>
                        <ListDiv>
                            { theme["productPage"]["prodDictionary"].map((item, index) => {
                                return (
                                    // <Fade cascade>
                                        <Listing key={`listing${index}`}>
                                            <ProdImage src={item["prodImages"][0]} alt={item["title"]} />
                                            <MoreColorsContainer>
                                                {item.availableColors.map((currentColor, i) => {
                                                    let colorsToShow = 10;
                                                    if (i < colorsToShow) {
                                                        return <OtherColor src={currentColor.colorSampleImage} alt={currentColor.color} key={`othercolor${index}${i}`} />
                                                    } else if (i === colorsToShow) {
                                                        return <MoreColorsText key={`moreColors${index}${i}`}>+ {item.availableColors.length - i} {theme.productPage.otherColors}</MoreColorsText>
                                                    } else {
                                                        return '';
                                                    }
                                                })}
                                            </MoreColorsContainer>
                                            <Title>{item["title"]}</Title>
                                            <Tagline>{item["tagline"]}</Tagline>
                                            {/* <Price>${item["price"]}</Price> */}
                                            <Link to={`/products/${item.prodId}`} className="listing-link">{theme["productPage"]["learnMore"]}</Link>
                                        </Listing>
                                    // </Fade>
                                )
                            })}
                        </ListDiv>
                    </Container>
                </PageDiv>
            )}
        </LanguageContext.Consumer>
    )
}
