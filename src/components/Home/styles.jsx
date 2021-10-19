import styled from 'styled-components';

export const Header = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 64px 10px;
    position: relative;
    z-index: 0;
`;

export const HeaderContentPlacer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    filter: contrast(105%) saturate(105%);
    background-image: url('https://i.imgur.com/THvT7gP.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 20%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

export const HeaderHeading = styled.h1`
    text-align: center;
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    font-size: 40px;
    line-height: 1.2;
    margin: 0;
    background-color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
`;

export const CenteredContain = styled.section`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 10px;
    position: relative;
`;

export const H2 = styled.h2`
    color: ${props => props.theme.green2};
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 0;
    text-align: center;
`;

export const CandleImage = styled.img`
    width: 100%;
    max-width: 700px;
    height: auto;
    margin: 0 0 34px 0;
`;

export const SideBySideButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 510px) {
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 511px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const SideBySidePrimary = styled.a`
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
export const SideBySideSecondary = styled.a`
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
    @media (max-width: 510px) {
        margin-top: 14px;
    }
`;

export const BenefitContainer = styled.section`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 10px;
    background-color: ${props => props.theme.lightestGray};
    border-radius: 50px 0 50px 0;
`;

export const Benefits = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 64px 10px;
    flex-wrap: wrap;
`;

export const BenefitBubbleWithText = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 12px;
    text-decoration: none;
    @media (max-width: 820px) {
        width: 35%;
        min-width: 140px;
    }
    @media (min-width: 821px) {
        width: 180px;
    }
`;

export const BenefitBubble = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: ${props => props.theme.green};
    border-radius: 50%;
    color: ${props => props.theme.whiteYellow};
    font-size: 40px;
    line-height: 100px;
    &:hover {
        background-color: ${props => props.theme.green2};
    }
`;

export const BenefitText = styled.h2`
    text-align: center;
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.lightBrown};
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
    margin-top: 8px;
    max-width: 100%;
`;

export const Postcard = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 10px;
    @media (max-width: 767px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const PostcardText = styled.div`
    width: 25%;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
`;

export const PostcardImageContainer = styled.div`
    width: 400px;
    height: 400px;
    background-color: white;
    border: 10px solid;
    border-image-slice: 1;
    z-index: 5;
    border-image-source: linear-gradient(45deg, cornflowerblue 0%, cornflowerblue 5%, #FF7F7F 5%, #FF7F7F 10%, cornflowerblue 10%, cornflowerblue 15%, #FF7F7F 15%, #FF7F7F 20%, cornflowerblue 20%, cornflowerblue 25%, #FF7F7F 25%, #FF7F7F 30%, cornflowerblue 30%, cornflowerblue 35%, #FF7F7F 35%, #FF7F7F 40%, cornflowerblue 40%, cornflowerblue 45%, #FF7F7F 45%, #FF7F7F 50%, cornflowerblue 50%, cornflowerblue 55%, #FF7F7F 55%, #FF7F7F 60%, cornflowerblue 60%, cornflowerblue 65%, #FF7F7F 65%, #FF7F7F 70%, cornflowerblue 70%, cornflowerblue 75%, #FF7F7F 75%, #FF7F7F 80%, cornflowerblue 80%, cornflowerblue 85%, #FF7F7F 85%, #FF7F7F 90%, cornflowerblue 90%, cornflowerblue 95%, #FF7F7F 95%, #FF7F7F 100%);
`;

export const PostcardImage = styled.div`
    position: relative;
    top: -110px;
    width: 100%;
    background-image: url('https://i.imgur.com/KihTwxz.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    height: 380px;
    width: 380px;
    box-sizing: border-box;
    z-index: 10;
`;

export const Stamp = styled.div`
    position: relative;
    top: -60px;
    right: -180px;
    z-index: 10;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    z-index: 20;
`;

export const Squiggles = styled.div`
    width: 200px;
    opacity: 0.8;

`;

export const RoundPart = styled.div`
    width: 110px;
    height: 110px;
`;

export const OuterRing = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: relative;
    background: #fff;
    background-clip: padding-box;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 24px;
    left: 5px;
    &:after {
        position: absolute;
        top: -4px; bottom: -4px;
        left: -4px; right: -4px;
        background: linear-gradient(170deg, rgba(152,152,152, 0.8), transparent);
        content: '';
        z-index: -1;
        border-radius: 50%;
    }
`;

export const InsideOfOuterRing = styled.div`
    height: 70px;
    width: 70px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const InnerRing = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-radius: 50%;
    position: relative;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background: #fff;
    background-clip: padding-box;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    &:after {
        position: absolute;
        top: -4px; bottom: -4px;
        left: -4px; right: -4px;
        background: linear-gradient(180deg, rgba(152,152,152,0.9) 20%, transparent);
        content: '';
        z-index: -1;
        border-radius: 50%;
    }
`;

export const InsideOfInnerRing = styled.div`
    height: 58px;
    width: 58px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 25;
    color: rgba(152,152,152,0.9);
    font-size: 28px;
    transform: rotate(-15deg);
`;

export const Squiggle = styled.img`
    width: 200px;
    transform: rotate(5deg);
    filter: grayscale(100%);
`;

export const PostcardP = styled.p`
    font-size: 18px;
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.secondaryFont};
    text-align: center;
    max-width: 180px;
`;

export const VideoContainer = styled.div`
    width: 100%; 
    height: 100%;
    max-height: 500px;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -100;
`;
export const Video = styled.video`
    position: absolute;
    width: 100%;
    top: 0;
`;

export const VideoSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
`;
