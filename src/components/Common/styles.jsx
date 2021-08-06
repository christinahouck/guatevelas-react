import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Container = styled.section`
    width: 100%;
    max-width: 1300px;
`;

export const CenteredContainer = styled.section`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 10px;
`;

export const BtnAPrimary = styled.a`
    margin-top: 24px; 
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

export const BtnASecondary = styled.a`
    margin-top: 24px; 
    padding: 12px 32px;
    border-radius: 4px;
    background-color: ${props => props.theme.green4};
    color: ${props => props.theme.whiteYellow};
    text-decoration: none;
    font-size: 24px;
    font-family: ${props => props.theme.secondaryFont}, serif;

    &:hover,
    &:active {
        background-color: ${props => props.theme.green2};
    }
`;

export const InlineButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`;

export const InlinePrimary = styled.a`
    padding: 12px 32px;
    margin: 0 12px;
    border-radius: 4px;
    background-color: ${props => props.theme.green};
    color: ${props => props.theme.whiteYellow};
    text-decoration: none;
    font-size: 18px;
    font-family: ${props => props.theme.secondaryFont}, serif;

    &:hover,
    &:active {
        background-color: ${props => props.theme.green2};
    }
`;
export const InlineSecondary = styled.a`
    margin: 0 12px;
    padding: 12px 32px;
    border-radius: 4px;
    background-color: ${props => props.theme.green4};
    color: ${props => props.theme.whiteYellow};
    text-decoration: none;
    font-size: 18px;
    font-family: ${props => props.theme.secondaryFont}, serif;

    &:hover,
    &:active {
        background-color: ${props => props.theme.green2};
    }
`;
