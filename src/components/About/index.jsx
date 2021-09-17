import React from 'react';
import { LanguageContext } from '../../languageContext';
import { 
    Section, 
    Container, 
    H1, 
    Video, 
    VideoSection, 
    VideoContainer, 
    FlexRow, 
    FlexCol, 
    BtnPrimary,
    VideoSectionContent,
    FlexColHalfWidthCentered,
    TwoImgBackground,
    ImgBackground,
    ImgBackgroundOverlay,
    ImgBgP,
    Fusion,
    FireSections,
    Fire,
    FireImg,
    FireH1, 
    FireP,
    Artisans,
    ArtisansSect,
    ArtisansImage,
    ArtisansImageCapt, 
    FooterH1,
    StaggeredH1,
    StaggeredHolder,
    Staggered,
    StaggeredInside
 } from './styles';

export default function About() {
    return (
        <LanguageContext.Consumer>
            {theme => ( 
                <div>
                    <Section>
                        <Container>
                            <FireSections>
                                <Fire>
                                    <FireImg src="https://i.imgur.com/OHFgIHl.jpg?1" alt="alt" />
                                </Fire>
                                <Fire>
                                    <FireH1>{theme["about"]["headerText"]}</FireH1>
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
                    <Section>
                        <Container>
                            <FlexRow>
                                <FlexRow>
                                    <Fusion>Guatevelas fuses two ancient forms of Mayan magic and tradition: fire and textiles</Fusion>
                                </FlexRow>
                            </FlexRow>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <H1>Our Artisans</H1>
                            <Artisans>
                                <ArtisansSect>
                                    <FlexColHalfWidthCentered>
                                        <ArtisansImage src="https://via.placeholder.com/300x400/b4bca4" alt="Luis Fernando Martinez" />
                                        <ArtisansImageCapt>Victor, 38 years old</ArtisansImageCapt>
                                    </FlexColHalfWidthCentered>
                                    <FlexColHalfWidthCentered>
                                        <FireP>The artisan duo that craft Guatevelas candles come from families with long-lasting legacies as artisans. Victor and Edwin enjoy their work because it requires attention to detail and it fills them with pride to think that their work will be appreciated and admired. They believe that an artisan develops their talent through experience, experimentation, and love of the craft.</FireP>
                                    </FlexColHalfWidthCentered>
                                </ArtisansSect>
                                <ArtisansSect>
                                    <FlexColHalfWidthCentered>
                                        <ArtisansImage src="https://via.placeholder.com/300x400/b4bca4" alt="Luis Fernando Martinez" />
                                        <ArtisansImageCapt>Edwin, 21 years old</ArtisansImageCapt>
                                    </FlexColHalfWidthCentered>
                                    <FlexColHalfWidthCentered>
                                        <FireP>Both Victor and Edwin are members of a grassroots association that helps local Guatemalan artisans to thrive. The association helps them to sell their art, provides access to small loans, and helps them to build up savings, among other benefits.</FireP>
                                    </FlexColHalfWidthCentered>
                                </ArtisansSect>
                            </Artisans>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <StaggeredH1>How Guatevelas candles are made</StaggeredH1>
                            <StaggeredHolder>
                                <Staggered>
                                    <StaggeredInside>
                                        <p>Mold design & preparation</p>
                                        <p>Cyllindrical candles are made with PVC pipe molds, cut to fit the specifications of the candle that is being made. The molds for our rectangular and ovular candles are made with aluminum.</p>
                                        <p>The molds are cleaned meticulously, and vegan oil is applied so that when they're finished, the candles can be removed from the molds.</p>
                                    </StaggeredInside>
                                </Staggered>
                                <Staggered>
                                    <StaggeredInside>
                                        <p>Wax preparation</p>
                                        <p>Paraffin wax is melted and dye is added until the perfect color is reached.</p>
                                        <p>Wicks are added to the molds and the hot wax is poured into the molds. The candles are then left to cool for at least 8 hours.</p>
                                    </StaggeredInside>
                                </Staggered>
                                <Staggered>
                                    <StaggeredInside>
                                        <p>Decoration</p>
                                        <p>Something about the decoration and maybe something about the seal</p>
                                    </StaggeredInside>
                                </Staggered>
                            </StaggeredHolder>
                        </Container>
                    </Section>

                    <VideoSection>
                        <VideoSectionContent>
                            <FlexCol>
                                <FooterH1>Find the perfect candle for you</FooterH1>
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
            )}
            </LanguageContext.Consumer>
    )
}