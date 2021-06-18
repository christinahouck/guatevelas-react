import React from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../languageContext';

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
    // console.log(dictToUse);
    // for (const [key, value] of Object.entries(prodDict[prodId])) {
    //     console.log(`${key}: ${value}`);
    //     // somehow decide to show this product's info, but idk how.....
    // }
}

export default function ProductPage() {
    let { prodId } = useParams();

    return (
        <LanguageContext.Consumer>
            {theme => ( 
                <div>
                    <h1>ProductPage</h1>
                    <p>product id: {prodId}</p>
                    <p>{theme.productPage.helloWorld}</p>
                    {lookForProdId(prodId, theme.productPage.prodDictionary)}
                </div>
            )}
        </LanguageContext.Consumer>
    )
}
