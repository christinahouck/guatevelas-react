import styled from 'styled-components';

export const ProductBody = styled.div`
    width: 100%;
    overflow-x: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProductContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 64px;
`;

export const ProdSection = styled.section`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 10px;
    @media (max-width: ${props => props.theme.breakpointMedium}) {
        width: 100%;
    }
    @media (min-width: ${props => props.theme.breakpointLarge}) {
        width: 47%;
        min-height: 500px;
    }
`;

export const ProdSectionInfo = styled(ProdSection)`
    @media (max-width: ${props => props.theme.breakpointMedium}) {
        justify-content: flex-start;
        margin-top: 146px;
    }
    @media (min-width: ${props => props.theme.breakpointLarge}) {
        justify-content: space-between;
    }
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 40px;
    line-height: 1.2;
    margin: 0;
    height: 100px;
`;

export const PriceBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin: 12px 0;
`;

export const PriceH2 = styled.h2`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.brown};
    font-size: 48px;
    margin: 0;
    line-height: 1;
`;

export const DollarSign = styled.h2`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.brown};
    font-size: 24px;
    margin: 0;
    margin-top: 8px;
`;

export const CentsBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 6px;
    margin-left: 2px;
`;

export const CentsSpan = styled.span`
    color: ${props => props.theme.brown};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 24px;
    &:nth-child(2) {
        margin-left: 8px;
    }
`;

export const Tagline = styled.p`
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 24px;
`;

export const BuyButton = styled.a`
    margin-top: 60px;
    padding: 12px 32px;
    border-radius: 4px;
    background-color: ${props => props.theme.green};
    color: ${props => props.theme.whiteYellow};
    text-decoration: none;
    font-size: 24px;
    font-family: ${props => props.theme.secondaryFont}, serif;

    &:hover,
    &:active {
        background-color: ${props => props.theme.green2};
    }
    &:nth-child(2n + 1) {
        margin-top: 8px;
    }
`;

export const GTBuyLink = styled.a`
    margin-top: 20px;
    color: ${props => props.theme.brown};
    font-size: 19px;
    font-family: ${props => props.theme.secondaryFont}, serif;
    &:hover,
    &:active {
        color: ${props => props.theme.green2};
    }
`;

export const EmptyDiv = styled.div`
    height: 1px;
    width: 1px;
`;

export const SocialShare = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const SocialP = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green2};
    text-align: center;
    font-size: 18px;
    width: 120px;
`;

export const ShareLink = styled.a`
    background-color: ${props => props.theme.green2};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
`;

export const ProdSectionFullWidth = styled.div`
    width: 100%;
    padding: 0 10px;
    padding-top: 48px;
`;

export const Header = styled.h2`
    color: ${props => props.theme.green2};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 0;
    text-align: left;
`;

export const Description = styled(Tagline)`
    text-align: left;
    color: ${props => props.theme.gray};
    margin-top: 0;
    line-height: 1.5;
`;

export const RecommendedSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const RecommendedProduct = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contnet: flex-start;
    margin: 0 12px;
    padding: 12px;
    height: 400px;
    border: 2px dashed cornflowerblue;
`;

export const RecommendedProdImg = styled.img`
    width: 100%;
    height: auto;
`;

export const RecommendedProdHeader = styled.h3`
    color: ${props => props.theme.green2};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 32px;
`;
