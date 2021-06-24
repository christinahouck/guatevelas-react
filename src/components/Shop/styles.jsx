import styled from 'styled-components';

export const PageDiv = styled.div`
    display: flex;
    flex-direction: row;
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
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 32px;
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
    max-width: 320px;
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
`;

export const Price = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green2};
    font-size: 36px;
    margin: 12px 0 0 0;
    text-align: center;
    width: 100%;
`;
