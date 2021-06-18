import React from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../languageContext';
import { ProductBody, 
    ProdSection, 
    ProductContainer, 
    Title, 
    PriceBox, 
    PriceH2, 
    CentsBox, 
    CentsSpan,
    BuyButton } from './styles';

function lookForProdId(prodId, prodDict) {
    let prodFound = false;
    for (const [key] of Object.entries(prodDict)) {
        if (key === prodId) {
            handleFoundProdId(prodDict, prodId);
            prodFound = true;
            return;
        } 
    }
    if (prodFound === false) {
        console.log('not found')
    }
}

function handleFoundProdId(prodDict, prodId) {
    var dictToUse = JSON.parse(JSON.stringify(prodDict[prodId]));
    console.log(dictToUse);
    return dictToUse;
}

export default function ProductPage() {
    let { prodId } = useParams();

    return (
        <LanguageContext.Consumer>
            {theme => ( 
                <ProductBody>
                    <p>{theme.productPage.helloWorld}</p>
                    {lookForProdId(prodId, theme.productPage.prodDictionary)}
                    <ProductContainer>
                        <ProdSection>

                        </ProdSection>
                        <ProdSection>
                            <Title>Title {prodId}</Title>
                            <PriceBox>
                                <PriceH2>$XX</PriceH2>
                                <CentsBox>
                                    <CentsSpan>.XX</CentsSpan>
                                    <CentsSpan>USD</CentsSpan>
                                </CentsBox>
                            </PriceBox>
                            <BuyButton href="#" target="_blank" rel="noopener">Buy on Etsy</BuyButton>
                        </ProdSection>
                    </ProductContainer>
                </ProductBody>
            )}
        </LanguageContext.Consumer>
    )
}
