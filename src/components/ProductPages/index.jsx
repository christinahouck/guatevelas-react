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
} from './styles';

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
                                    </ProdSection>
                                    <ProdSection>
                                        <Title>{item["title"]}</Title>
                                        <PriceBox>
                                            <PriceH2>${item["price"].split('.')[0]}</PriceH2>
                                            <CentsBox>
                                                <CentsSpan>.{item["price"].split('.')[1]}</CentsSpan>
                                                <CentsSpan>USD</CentsSpan>
                                            </CentsBox>
                                        </PriceBox>
                                        <p>{item["description"]}</p>
                                        <BuyButton href={item["buyLink"]} target="_blank" rel="noopener">Buy on Etsy</BuyButton>
                                    </ProdSection>
                                </ProductContainer>
                            )
                        } else { return (<EmptyDiv key={`emEmptyDivtydiv${index}`}></EmptyDiv>)}
                    })}
                </ProductBody>
            )}
        </LanguageContext.Consumer>
    )
}