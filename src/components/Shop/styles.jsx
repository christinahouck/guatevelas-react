import styled from 'styled-components';

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow-x: none;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 64px 10px;
    margin-top: 300px;
    @media (max-width: 759px) {
        margin-top: 314px;
    }
    @media (max-width: 619px) {
        margin-top: 255px;
    }
    @media (max-width: 509px) {
        margin-top: 340px;
    }
    @media (max-width: 419px) {
        margin-top: 350px;
    }
    @media (max-width: 369px) {
        margin-top: 520px;
    }
`;

export const ColorSelectCont = styled.section`
    position: absolute;
    top: 190px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1050px;
    z-index: 5;
    padding: 5px;
    & img {
        max-width: 110px;
        @media (max-width: 619px) {
            max-width: 90px;
        }
    }
    @media (max-width: 769px) {
        top: 168px;
    }
    & div > button {
        @media (max-width: 619px) {
            max-width: 100px;
        }
        @media (max-width: 419px) {
            max-width: 90px;
        }
    }
`;

export const Header = styled.h1`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.brown};
    font-size: 52px;
    margin: 0;
`;

export const ListDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 6px;
`;

export const Listing = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-shadow: ${props => props.theme.shadow};
    font-family: ${props => props.theme.secondaryFont}, serif;
    padding: 30px;
    border-radius: 10px;
    margin: 16px 8px;
    @media (min-width: 691px) {
        max-width: 320px;
    }
`;

export const ProdImage = styled.img`
    width: 100%;
    height: auto;
`;

export const Title = styled.h3`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 32px;
    margin: 24px 0 0 0;
`;

export const Tagline = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.gray};
    font-size: 24px;
    margin: 8px 0 0 0;
    @media (min-width: 691px) {
        height: 320px;
    }
`;

export const MoreColorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    flex-wrap: wrap;
    margin: 12px 0;
`;

export const OtherColor = styled.img`
    height: 30px;
    width: auto;
    margin: 6px 3px;
`;

export const MoreColorsText = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.gray};
    font-size: 18px;
    line-height: 1.3;
    margin: 0 auto;
`;

export const Price = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green2};
    font-size: 36px;
    margin: 12px 0 0 0;
    text-align: center;
    width: 100%;
`;
