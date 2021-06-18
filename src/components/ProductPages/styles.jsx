import styled from 'styled-components';

export const ProductBody = styled.div`
    width: 100%;
    overflow-x: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FlexRowCenter = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ProductContainer = styled(FlexRowCenter)`
    width: 100%;
    max-width: 1000px;
`;

export const ProdSection = styled.section`
    border: 2px solid cornflowerblue;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 10px;
    @media (max-width: ${props => props.theme.breakpointMedium}) {
        width: 100%;
    }
    @media (min-width: ${props => props.theme.breakpointLarge}) {
        width: 50%;
    }
    min-height: 500px;
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 40px;
    line-height: 1.2;
    margin: 0;
`;

export const PriceBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-top: 12px;
`;

export const PriceH2 = styled.h2`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.brown};
    font-size: 32px;
    margin: 0;
`;

export const CentsBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 4px;
`;

export const CentsSpan = styled.span`
    color: ${props => props.theme.brown};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 14px;
    &:nth-child(2) {
        margin-left: 8px;
    }
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
`;
