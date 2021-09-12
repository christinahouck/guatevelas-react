import React from 'react';
import { 
    Section, 
    Container, 
    H1, 
    Video, 
    VideoSection, 
    VideoContainer, 
    FlexRow, 
    FlexCol, 
    FlexRowLeft,
    BtnPrimary,
    VideoSectionContent,
    FlexColHalfWidth,
    TwoImgBackground,
    ImgBackground,
    ImgBackgroundOverlay,
    ImgBgP,
    FireSections,
    Fire,
    FireImg,
    FireH1, 
    FireP
 } from './styles';

export default function About() {
    return (
        <div>
            <Section>
                <Container>
                    <FireSections>
                        <Fire>
                            <FireImg src="https://i.imgur.com/OHFgIHl.jpg?1" alt="alt" />
                        </Fire>
                        <Fire>
                            <FireH1>Fire: one of the last remaining forms of magic.</FireH1>
                            <FireP>One of the four elements, fire has captivated humanity since primitive times. It represents purification and has been used in rituals for ages, from burials to births to cleansings.</FireP>
                            <FireP>Candles are a manifestation of fire that we use even now, and even in the simplest of rituals such as lighting a birthday candle.</FireP>
                        </Fire>
                    </FireSections>
                </Container>
            </Section>
            <Section>
                <TwoImgBackground>
                    <ImgBackground>
                    </ImgBackground>
                    <ImgBackground>
                    </ImgBackground>
                    <ImgBackgroundOverlay>
                    <FlexRow>
                        <FlexCol>
                            <H1>Guatemalan Textile Art</H1>
                            <ImgBgP>Textiles are an essential part of ancient Guatemalan culture, one that has been handed down for millennia. Not only are Guatemalan textiles beautiful works of art, they also have long-lasting significance.</ImgBgP>
                            <ImgBgP>Textiles have been woven using traditional methods and tools such as backstrap looms. Historically, this artful skill has been passed down from mother to daughter as a rite of passage.</ImgBgP>
                            <ImgBgP>Over time, different regions adopted patterns as their own, and a trained eye can oftentimes tell where a piece came from by its pattern.</ImgBgP>
                        </FlexCol>
                    </FlexRow>
                </ImgBackgroundOverlay>
                </TwoImgBackground>
            </Section>
            {/* <Section>
                <Container>
                    <FlexRow>
                        <FlexCol>
                            <H1>Guatevelas fuses two ancient forms of Mayan magic and tradition: fire and textiles</H1>
                            <p>Read all about it</p>
                        </FlexCol>
                    </FlexRow>
                </Container>
            </Section> */}
            {/* <Section>
                <Container>
                    <FlexRow>
                        <FlexCol>
                            <H1>The artisans and their process</H1>
                            <p>Read all about it</p>
                        </FlexCol>
                    </FlexRow>
                </Container>
            </Section> */}
            {/* <Section>
                <Container>
                    <FlexRow>
                        <FlexColHalfWidth>
                            <img src="https://via.placeholder.com/300x400/b4bca4" alt="Luis Fernando Martinez" />
                        </FlexColHalfWidth>
                        <FlexColHalfWidth>
                            <H1>Hello</H1>
                            <p>Some text about Luis Fernando</p>
                        </FlexColHalfWidth>
                    </FlexRow>
                </Container>
            </Section> */}

            <VideoSection>
                <VideoSectionContent>
                    <FlexCol>
                        <H1>Find the perfect candle for you</H1>
                        <BtnPrimary href="/shop">Shop now</BtnPrimary>
                    </FlexCol>
                </VideoSectionContent>
                <VideoContainer>
                    <Video autoPlay loop muted>
                        <source src="../assets/sparks.mp4" type="video/mp4" />
                    </Video>
                </VideoContainer>
            </VideoSection>
        </div>
    )
}