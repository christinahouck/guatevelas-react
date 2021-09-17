import React from 'react';
import { LanguageContext } from '../../languageContext';
import { Main, CenteredContainer, BtnAPrimary } from '../Common/styles';
import { 
    Header, 
    HeaderHeading, 
    H2, 
    CenteredContain, 
    CandleImage, 
    SideBySideButtons,
    SideBySidePrimary,
    BenefitContainer,
    Benefits, 
    BenefitBubbleWithText, 
    BenefitBubble, 
    BenefitText,
    Postcard,
    PostcardText,
    PostcardImageContainer, 
    PostcardImage,
    Stamp,
    Squiggles,
    Squiggle,
    RoundPart, 
    OuterRing,
    InsideOfOuterRing, 
    InnerRing,
    InsideOfInnerRing, 
    PostcardP,
    Video,
    VideoContainer
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faHandHoldingHeart, faFire, faGifts, faPlane } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    return (
        <LanguageContext.Consumer>
            {theme => (
                <Main>
                    <Header>
                        <VideoContainer>  
                            <Video autoPlay loop muted>
                                <source src="../assets/candles.mp4" type="video/mp4" />
                            </Video>
                        </VideoContainer>
                        <CenteredContain>
                            <HeaderHeading>{theme["home"]["headerText"]}</HeaderHeading>
                            <BtnAPrimary href="/products">{theme["home"]["headerBtnText"]}</BtnAPrimary>
                        </CenteredContain>
                    </Header>
                    <CenteredContainer>
                        <H2>{theme["home"]["handcrafted"]}</H2>
                        <CandleImage src="https://i.imgur.com/bv8DHoW.png" />
                    </CenteredContainer>
                    <BenefitContainer>
                        <H2>{theme["home"]["unique"]}</H2>
                        <Benefits>
                            <BenefitBubbleWithText href="/about">
                                <BenefitBubble><FontAwesomeIcon icon={faGlobeAmericas} /></BenefitBubble>
                                <BenefitText>{theme["home"]["guatemalanOwned"]}</BenefitText>
                            </BenefitBubbleWithText>
                            <BenefitBubbleWithText href="/about">
                                <BenefitBubble><FontAwesomeIcon icon={faFire} /></BenefitBubble>
                                <BenefitText>{theme["home"]["burnTime"]}</BenefitText>
                            </BenefitBubbleWithText>
                            <BenefitBubbleWithText href="/about">
                                <BenefitBubble><FontAwesomeIcon icon={faHandHoldingHeart} /></BenefitBubble>
                                <BenefitText>{theme["home"]["empowers"]}</BenefitText>
                            </BenefitBubbleWithText>
                            <BenefitBubbleWithText href="/about">
                                <BenefitBubble><FontAwesomeIcon icon={faGifts} /></BenefitBubble>
                                <BenefitText>{theme["home"]["gift"]}</BenefitText>
                            </BenefitBubbleWithText>
                        </Benefits>
                        <SideBySideButtons>
                            <SideBySidePrimary href="/about">{theme["home"]["learnMore"]}</SideBySidePrimary>
                        </SideBySideButtons>
                    </BenefitContainer>
                    <CenteredContainer>
                        <Postcard>
                            <PostcardText>
                                <PostcardP>{theme["home"]["postcardLeft"]}</PostcardP>
                            </PostcardText>
                            <PostcardImageContainer>
                                <Stamp aria-hidden="true">
                                    <Squiggles>
                                        <Squiggle src="https://daks2k3a4ib2z.cloudfront.net/5825f89e8ad305816466d37f/583e146240b743510c55b186_techhire-wavy.svg" />
                                        <Squiggle src="https://daks2k3a4ib2z.cloudfront.net/5825f89e8ad305816466d37f/583e146240b743510c55b186_techhire-wavy.svg" />
                                        <Squiggle src="https://daks2k3a4ib2z.cloudfront.net/5825f89e8ad305816466d37f/583e146240b743510c55b186_techhire-wavy.svg" />
                                        <Squiggle src="https://daks2k3a4ib2z.cloudfront.net/5825f89e8ad305816466d37f/583e146240b743510c55b186_techhire-wavy.svg" />
                                    </Squiggles>
                                    <RoundPart>
                                        <OuterRing>
                                            <InsideOfOuterRing>
                                                <InnerRing>
                                                    <InsideOfInnerRing>
                                                        <FontAwesomeIcon icon={faPlane} />
                                                    </InsideOfInnerRing>
                                                </InnerRing>
                                            </InsideOfOuterRing>
                                        </OuterRing>
                                    </RoundPart>
                                </Stamp>
                                <PostcardImage src="https://via.placeholder.com/400?text=Picture+of+an+artisan" alt="A photo of a Guatevelas artisan" />
                            </PostcardImageContainer>
                            <PostcardText>
                                <PostcardP>{theme["home"]["postcardRight"]}</PostcardP>
                            </PostcardText>
                        </Postcard>
                        <SideBySideButtons>
                            <SideBySidePrimary href="/products">{theme["home"]["shopNow"]}</SideBySidePrimary>
                        </SideBySideButtons>
                    </CenteredContainer>
                </Main>
            )}
        </LanguageContext.Consumer>
    )
}
