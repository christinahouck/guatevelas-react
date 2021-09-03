import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed green;
`;

export const Container = styled.div`
    padding: 64px 10px;
    width: 100%;
    max-width: 800px;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

export const FlexRowLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
`;

export const FlexColHalfWidth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 10px;
    width: 44%;
    border: 2px dashed orange;
`;

export const H1 = styled.h1`
    text-align: center;
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 40px;
    line-height: 1.2;
    margin: 0;
`;

export const VideoSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    position: relative;
    bottom: 0;
`;

export const VideoContainer = styled.div`
    width: 100%; 
    height: 100%;
    max-height: 500px;
    overflow: hidden;
    z-index: -100;
`;

export const VideoSectionContent = styled.div`
    position: absolute;
    top: 35%;
    background-color: #fff;
    padding: 16px 30px;
    border-radius: 10px;
`;

export const Video = styled.video`
    max-width: 100vw;
`;

export const BtnPrimary = styled.a`
    padding: 12px 32px;
    margin-top: 24px;
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
