import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    padding: 92px 10px;
    width: 100%;
    max-width: 1200px;
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
    &:first-child {
        align-items: center;
    }
`;

export const FlexColHalfWidthCentered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
    justify-content: center;
    margin: 0 10px;
    width: 44%;
    &:first-child {
        align-items: center;
    }
`;

export const H1 = styled.h1`
    text-align: center;
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 52px;
    line-height: 1.2;
    margin: 0;
`;

export const FooterH1 = styled.h1`
    text-align: center;
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 40px;
    line-height: 1.2;
    margin: 0;
`;

export const FireSections = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Fire = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding: 0 20px;
`;

export const FireImg = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 30px 0 30px 0;
`;

export const FireH1 = styled.h1`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 40px;
    line-height: 1.2;
    margin: 0;
    text-align: left;
`;

export const FireP = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.gray};
    font-size: 24px;
    line-height: 1.2;
    margin: 12px 0 0 0;
    text-align: left;
`;

export const TwoImgBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;
export const ImgBackground = styled.div`
    width: 50%;
    height: 100%;
    min-height: 800px;
    background-color: #444;
    &:first-child {
        background-image: url('https://i.imgur.com/s8EugGU.jpg');
    }
    &:nth-child(2) {
        background-image: url('https://i.imgur.com/heIPzMb.jpg');
    }
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    top: 0;
    left: 0;
`;

export const ImgBackgroundOverlay = styled.div`
    position: absolute;
    z-index: 900;
    top: 840px;
    left: 27%;
    background-color: #f1f1f1;
    width: 60%;
    max-width: 800px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${props => props.theme.shadow};
    padding: 30px;
`;

export const ImgBgP = styled.p`
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.secondaryFont};
    text-align: left;
    font-size: 24px;
`;

export const Fusion = styled.h1`
    color: ${props => props.theme.brown};
    font-family: ${props => props.theme.secondaryFont};
    font-size: 48px;
    line-height: 1.2;
    width: 100%;
    max-width: 1000px;
    text-align: center;
    margin-top: 82px;
    margin-bottom: 64px;
`;

// export const FusionImg = styled.img`
//     max-width: 600px;
//     width: 100%;
//     height: auto;
//     margin-bottom: 68px;
// `;

export const Artisans = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 24px;
`;

export const ArtisansSect = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 16px 0;
    &:first-child {
        margin-top: 18px;
        flex-direction: row;
    }
    &:nth-child(2) {
        flex-direction: row-reverse;
    }
`;

export const ArtisansImage = styled.img`
    max-width: 100%;
    height: auto;
    box-shadow: #586a3a 5px 5px, #7c885f 10px 10px, #84946a 15px 15px, #9ea783 20px 20px, #bdbd99 25px 25px;
`;

export const ArtisansImageCapt = styled.p`
    color: ${props => props.theme.green};
    font-family: ${props => props.theme.secondaryFont};
    text-align: center;
    font-size: 18px;
    margin-top: 36px;
`;

export const StaggeredH1 = styled.h1`
    margin: 0;
    margin-bottom: 24px;
    text-align: center;
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 52px;
    line-height: 1.2;
`;

export const StaggeredHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 62px;
`;

export const Staggered = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    &:nth-child(2n) {
        align-items: flex-start;
    }
    &:nth-child(2n + 1) {
        align-items: flex-end;
        justify-content: flex-end;
    }
`;

export const StaggeredInside = styled.div`
    width: 90%;
    background-color: #f1f1f1;
    padding: 24px;
    border-radius: 8px;
    margin-top: 12px;
    margin-bottom: 12px;
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
