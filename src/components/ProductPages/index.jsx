import React from 'react';

import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../languageContext';
import ProdImgSwiper from './ProdImgSwiper/index';
import { ProductBody, 
    ProdSection, 
    ProductContainer, 
    Title, 
    PriceBox, 
    PriceH2, 
    CentsBox, 
    CentsSpan,
    BuyButton,
    EmptyDiv,
    Tagline,
    DollarSign,
    SocialShare,
    ShareLink,
    SocialP,
    ProdSectionFullWidth,
    Header,
    Description
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faPinterest, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faTwitter);

export default function ProductPage() {
    let { prodId } = useParams();

    return (
        <LanguageContext.Consumer>
            {theme => ( 
                <ProductBody>
                    {theme["productPage"]["prodDictionary"].map((item, index) => {
                        if ((theme["productPage"]["prodDictionary"][index]["prodId"]).toString() === prodId) {
                            return ( 
                                <ProductContainer key={`prodSect${index}`}>
                                    <ProdSection>
                                        <ProdImgSwiper product={item} />
                                        <SocialShare>
                                            <SocialP>Share on<br/>Social Media</SocialP>
                                            <ShareLink id="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//guatevelas.com" target="_blank" rel="noopener">
                                                <FontAwesomeIcon icon={faFacebookF} color="#faf8dd" />
                                            </ShareLink>
                                            <ShareLink id="twitter" href="https://twitter.com/intent/tweet?text=https%3A//guatevelas.com" target="_blank" rel="noopener">
                                            <FontAwesomeIcon icon={faTwitter} color="#faf8dd" />
                                            </ShareLink>
                                            <ShareLink id="pinterest" href="https://pinterest.com/pin/create/button/?url=https://guatevelas.com" target="_blank" rel="noopener">
                                                <FontAwesomeIcon icon={faPinterest} color="#faf8dd" />
                                            </ShareLink>
                                            <ShareLink id="pinterest" href="mailto:info@example.com?&subject=Check+this+out&cc=&bcc=&body=https://guatevelas.com%0A" target="_blank" rel="noopener">
                                                <FontAwesomeIcon icon={faEnvelope} color="#faf8dd" />
                                            </ShareLink>
                                        </SocialShare>
                                    </ProdSection>
                                    <ProdSection>
                                        <div>
                                            <Title>{item["title"]}</Title>
                                            <PriceBox>
                                                <DollarSign>$</DollarSign>
                                                <PriceH2>{item["price"].split('.')[0]}</PriceH2>
                                                <CentsBox>
                                                    <CentsSpan>.{item["price"].split('.')[1]}</CentsSpan>
                                                    <CentsSpan>USD</CentsSpan>
                                                </CentsBox>
                                            </PriceBox>
                                            <Tagline>{item["tagline"]}</Tagline>
                                        </div>
                                        <BuyButton href={item["buyLink"]} target="_blank" rel="noopener">Buy on Etsy</BuyButton>
                                    </ProdSection>
                                    <ProdSectionFullWidth>
                                        <Header>More info</Header>
                                        <Description>{item["description"]}</Description>
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