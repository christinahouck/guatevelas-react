import styled from 'styled-components';

export const ColorSelectContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ColorOption = styled.button`
    width: 150px;
    height: 71px;
    border: transparent;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    @media (max-width: 609px) {
        height: 85px;
    } 
`;

export const ColorOptionImage = styled.img`
    background-color: ${props => props.theme.green};
    width: 100%;
    height: 50px;
    border-radius: 10px;
`;

export const ColorName = styled.h2`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.brown};
    font-size: 12px;
    margin: 0 auto;
    text-align: center;
`;
