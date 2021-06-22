import styled from 'styled-components';

export const RecommendedSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 64px;
`;

export const RecommendedHead = styled.h2`
    color: ${props => props.theme.green2};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 32px;
    width: 100%;
`;

export const RecommendedProduct = styled.a`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contnet: flex-start;
    margin: 12px;
    padding: 12px 12px 32px;
    border-radius: 6px;
    &:hover, 
    &:active {
        box-shadow: ${props => props.theme.shadow};
    }
`;

export const RecommendedProdImg = styled.img`
    width: 100%;
    height: auto;
`;

export const RecommendedProdHeader = styled.h3`
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 24px;
    text-decoration: none;
    margin: 8px 0;
`;

export const LearnMore = styled.p`
    text-decoration: none;
    color: ${props => props.theme.green3};
    margin: 0;
`;
