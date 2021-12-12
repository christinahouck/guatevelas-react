import React from 'react';

import { withRouter } from 'react-router-dom';
import { LanguageContext } from '../../languageContext';
import ProdImgSwiper from './ProdImgSwiper/index';
import Recommended from './Recommended/index';
import ColorSelect from './ColorSelect/index';

import { ProductBody, 
    ProdSection, 
    ProductContainer, 
    Title, 
    BuyButton,
    EmptyDiv,
    SocialShare,
    ShareLink,
    SocialP,
    ProdSectionFullWidth,
    Header,
    Description,
    ProdSectionInfo,
    GTBuyLink
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faPinterest, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter);

class ProductPage extends React.Component {
    state = {
      color: 'Atitlán Blue',
      colorIndex: 0,
    }
    toggleColor = (event, newColor, index) => {
        this.setState({ color: newColor, colorIndex: index});
    }

    render() {
        const { color, colorIndex } = this.state;
        let prodId = this.props.match.params.prodId;
        return (
            <LanguageContext.Consumer>
                {theme => ( 
                    <ProductBody>
                        {theme["productPage"]["prodDictionary"].map((item, index) => {
                            if ((theme["productPage"]["prodDictionary"][index]["prodId"]).toString() === prodId) {
                                return ( 
                                    <ProductContainer key={`prodSect${index}`}>
                                        <ProdSection>
                                            <ProdImgSwiper product={item} color={color} colorIndex={colorIndex}/>
                                            <SocialShare>
                                                <SocialP>{theme["productPage"]["social"]}</SocialP>
                                                <ShareLink id="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//guatevelas.com" target="_blank" rel="noopener">
                                                    <FontAwesomeIcon icon={faFacebookF} color="#faf8dd" />
                                                </ShareLink>
                                                <ShareLink id="twitter" href="https://twitter.com/intent/tweet?text=https%3A//guatevelas.com" target="_blank" rel="noopener">
                                                <FontAwesomeIcon icon={faTwitter} color="#faf8dd" />
                                                </ShareLink>
                                                <ShareLink id="pinterest" href="https://pinterest.com/pin/create/button/?url=https://guatevelas.com" target="_blank" rel="noopener">
                                                    <FontAwesomeIcon icon={faPinterest} color="#faf8dd" />
                                                </ShareLink>
                                                <ShareLink id="pinterest" href={`mailto:info@example.com?&subject=Guatevelas&cc=&bcc=&body=https://guatevelas.com/products/${item.prodId}`} target="_blank" rel="noopener">
                                                    <FontAwesomeIcon icon={faEnvelope} color="#faf8dd" />
                                                </ShareLink>
                                            </SocialShare>
                                        </ProdSection>
                                        <ProdSectionInfo>
                                            <div>
                                                <Title>{item["title"]} (GV{item["prodId"].toString().slice(1,4)}) {theme["productPage"]["in"]} {color}</Title>
                                                {/* <PriceBox>
                                                    <DollarSign>$</DollarSign>
                                                    <PriceH2>{item["price"].split('.')[0]}</PriceH2>
                                                    <CentsBox>
                                                        <CentsSpan>.{item["price"].split('.')[1]}</CentsSpan>
                                                        <CentsSpan>USD</CentsSpan>
                                                    </CentsBox>
                                                </PriceBox> */}
                                                <ColorSelect prodId={item} toggleColor={this.toggleColor}></ColorSelect>
                                            </div>
                                            <BuyButton href={item["buyLink"]} target="_blank" rel="noopener">{theme["productPage"]["buyButton"]}</BuyButton>
                                            {theme["lang"] === "en" ? <GTBuyLink href={`mailto:guatemalavelas@gmail.com?&subject=New%20purchase%20order&body=Hi, I live in Guatemala and I'd like to purchase a candle. I'm interested in the ${item.title} candle in ${color}. Thanks!`} target="_blank" rel="noopener noreferrer">Purchase via email (only available in Guatemala)</GTBuyLink> : <GTBuyLink href={`mailto:guatemalavelas@gmail.com?&subject=Nuevo%20pedido&body=Hola, vivo en Guatemala y me gustaría comprar una vela. Estoy interesado en el modelo ${item.title} en el color ${color}. Un saludo.`} target="_blank" rel="noopener noreferrer">Comprar por correo-e (disponible sólamente en Guatemala)</GTBuyLink>}
                                            </ProdSectionInfo>
                                        <ProdSectionFullWidth>
                                            <Header>{theme["productPage"]["moreInfo"]}</Header>
                                            <Description>{item["tagline"]}</Description>
                                            <Description>{theme["productPage"]["prodSpecsMeasurements"]} {item["height"]} x {item["width"]} {theme["productPage"]["prodSpecsWeight"]} {item["weight"]}</Description>
                                            <Header>{theme["productPage"]["warning"]}</Header>
                                            {theme["productPage"]["warnings"].map((warn, n) => {return <Description key={`warn${n}`}>{warn}</Description>})}
                                            <Header>{theme["productPage"]["burnInstruction"]}</Header>
                                            {theme["productPage"]["burnInstructions"].map((instruct, dex) => {return <Description key={`instruct${dex}`}>{instruct}</Description>})}
                                        </ProdSectionFullWidth>
                                        <ProdSectionFullWidth>
                                            <Recommended
                                                prod={item}
                                            >
                                            </Recommended>
                                        </ProdSectionFullWidth>
                                    </ProductContainer>
                                )
                            } else { return (<EmptyDiv key={`emEmptyDivtydiv${index}`}></EmptyDiv>)}
                        })}
                    </ProductBody>
                )}
            </LanguageContext.Consumer>
        )
    }
}

export default withRouter(ProductPage);