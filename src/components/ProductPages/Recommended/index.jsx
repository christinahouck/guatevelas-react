import React from 'react';

import { LanguageContext } from '../../../languageContext';
import { 
    RecommendedSection,
    RecommendedHead,
    RecommendedProduct,
    RecommendedProdImg,
    RecommendedProdHeader,
    LearnMore
} from './styles';
import Fade from 'react-reveal/Fade';

export default function Recommended(props) {
    return (
        <LanguageContext.Consumer>
            {theme => ( 
                <RecommendedSection>
                    <RecommendedHead>{theme["productPage"]["mayAlso"]}</RecommendedHead>
                    {props.prod.recommendedProds.map((item, index) => {
                        return (
                            <RecommendedProduct 
                                key={`recommendedProd${index}`} 
                                href={`/products/${item["prodId"]}`}
                            >
                                <Fade>
                                    <RecommendedProdImg src={item["imgUrl"]} alt={item["name"]} />
                                    <RecommendedProdHeader>{item["name"]}</RecommendedProdHeader>
                                    <LearnMore>Learn more</LearnMore>
                                </Fade>
                            </RecommendedProduct>
                        )
                    })}
                </RecommendedSection>
            )}
        </LanguageContext.Consumer>
    )
}