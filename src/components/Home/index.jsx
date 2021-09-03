import React from 'react';
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
        <Main>
            <Header>
                <VideoContainer>  
                    <Video autoPlay loop muted>
                        <source src="../assets/candles.mp4" type="video/mp4" />
                    </Video>
                </VideoContainer>
                <CenteredContain>
                    <HeaderHeading>Discover the magic of Mayan fire</HeaderHeading>
                    <BtnAPrimary href="/products">Browse the collection</BtnAPrimary>
                </CenteredContain>
            </Header>
            <CenteredContainer>
                <H2>Handcrafted Guatemalan candles</H2>
                <CandleImage src="https://i.imgur.com/bv8DHoW.png" />
            </CenteredContainer>
            <BenefitContainer>
                <H2>What makes Guatevelas unique</H2>
                <Benefits>
                    <BenefitBubbleWithText href="/about">
                        <BenefitBubble><FontAwesomeIcon icon={faGlobeAmericas} /></BenefitBubble>
                        <BenefitText>Guatemalan-owned</BenefitText>
                    </BenefitBubbleWithText>
                    <BenefitBubbleWithText href="/about">
                        <BenefitBubble><FontAwesomeIcon icon={faFire} /></BenefitBubble>
                        <BenefitText>24+ hour burn time</BenefitText>
                    </BenefitBubbleWithText>
                    <BenefitBubbleWithText href="/about">
                        <BenefitBubble><FontAwesomeIcon icon={faHandHoldingHeart} /></BenefitBubble>
                        <BenefitText>Empowers local artisans</BenefitText>
                    </BenefitBubbleWithText>
                    <BenefitBubbleWithText href="/about">
                        <BenefitBubble><FontAwesomeIcon icon={faGifts} /></BenefitBubble>
                        <BenefitText>Unique & meaningful gift</BenefitText>
                    </BenefitBubbleWithText>
                </Benefits>
                <SideBySideButtons>
                    <SideBySidePrimary href="/about">Learn more</SideBySidePrimary>
                </SideBySideButtons>
            </BenefitContainer>
            <CenteredContainer>
                <Postcard>
                    <PostcardText>
                        <PostcardP>Your purchase empowers local artisans by investing in their work</PostcardP>
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
                        <PostcardP>Plus, you get a unique and meaningful souvenir</PostcardP>
                    </PostcardText>
                </Postcard>
                <SideBySideButtons>
                    <SideBySidePrimary href="/products">Shop now</SideBySidePrimary>
                </SideBySideButtons>
            </CenteredContainer>
        </Main>
    )
}
