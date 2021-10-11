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
    ImgBackgroundOverlayHolder,
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
    StaggeredP,
    StaggeredText,
    StaggeredImg,
    StaggeredTitle,
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
                                    {theme["about"]["headerPs"].map((p, index) => {
                                        return(
                                            <FireP key={`firep${index}`}>{p}</FireP>
                                        )
                                    })}
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
                            <ImgBackgroundOverlayHolder>
                                <ImgBackgroundOverlay>
                                    <FlexRow>
                                        <FlexCol>
                                            <H1>{theme["about"]["overlayH1"]}</H1>
                                            {theme["about"]["overlayPs"].map((p, index) => {
                                                return(
                                                    <ImgBgP key={`imgbp${index}`}>{p}</ImgBgP>
                                                )
                                            })}
                                        </FlexCol>
                                    </FlexRow>
                                </ImgBackgroundOverlay>
                            </ImgBackgroundOverlayHolder>
                        </TwoImgBackground>
                    </Section>
                    <Section>
                        <Container>
                            <FlexRow>
                                <FlexRow>
                                    <Fusion>{theme["about"]["fusion"]}</Fusion>
                                </FlexRow>
                            </FlexRow>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <H1>{theme["about"]["ourArtisans"]}</H1>
                            <Artisans>
                                <ArtisansSect>
                                    <FlexColHalfWidthCentered>
                                        <ArtisansImage src="https://via.placeholder.com/300x400/b4bca4" alt="Luis Fernando Martinez" />
                                        <ArtisansImageCapt>{theme["about"]["victor"]}</ArtisansImageCapt>
                                    </FlexColHalfWidthCentered>
                                    <FlexColHalfWidthCentered>
                                        <FireP>{theme["about"]["victorP"]}</FireP>
                                    </FlexColHalfWidthCentered>
                                </ArtisansSect>
                                <ArtisansSect>
                                    <FlexColHalfWidthCentered>
                                        <ArtisansImage src="https://via.placeholder.com/300x400/b4bca4" alt="Luis Fernando Martinez" />
                                        <ArtisansImageCapt>{theme["about"]["edwin"]}</ArtisansImageCapt>
                                    </FlexColHalfWidthCentered>
                                    <FlexColHalfWidthCentered>
                                        <FireP>{theme["about"]["edwinP"]}</FireP>
                                    </FlexColHalfWidthCentered>
                                </ArtisansSect>
                            </Artisans>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <StaggeredH1>{theme["about"]["how"]}</StaggeredH1>
                            <StaggeredHolder>
                                <Staggered>
                                    <StaggeredInside>
                                        <StaggeredText>
                                            <StaggeredTitle>{theme["about"]["staggeredTitle1"]}</StaggeredTitle>
                                            {theme["about"]["staggeredPs1"].map((p, index) => {
                                                return(
                                                    <StaggeredP key={`staggeredp1${index}`}>{p}</StaggeredP>
                                                )
                                            })}
                                        </StaggeredText>
                                        <StaggeredImg>

                                        </StaggeredImg>
                                    </StaggeredInside>
                                </Staggered>
                                <Staggered>
                                    <StaggeredInside>
                                        <StaggeredImg>
                                        </StaggeredImg>
                                        <StaggeredText>
                                            <StaggeredTitle>{theme["about"]["staggeredTitle2"]}</StaggeredTitle>
                                            {theme["about"]["staggeredPs2"].map((p, index) => {
                                                return(
                                                    <StaggeredP key={`staggeredp2${index}`}>{p}</StaggeredP>
                                                )
                                            })}
                                        </StaggeredText>
                                    </StaggeredInside>
                                </Staggered>
                                <Staggered>
                                    <StaggeredInside>
                                        <StaggeredText>
                                            <StaggeredTitle>{theme["about"]["staggeredTitle3"]}</StaggeredTitle>
                                            {theme["about"]["staggeredPs3"].map((p, index) => {
                                                return(
                                                    <StaggeredP key={`staggeredp3${index}`}>{p}</StaggeredP>
                                                )
                                            })}
                                        </StaggeredText>
                                        <StaggeredImg>
                                        </StaggeredImg>
                                    </StaggeredInside>
                                </Staggered>
                            </StaggeredHolder>
                        </Container>
                    </Section>

                    <VideoSection>
                        <VideoSectionContent>
                            <FlexCol>
                                <FooterH1>{theme["about"]["footerH1"]}</FooterH1>
                                <BtnPrimary href="/shop">{theme["about"]["footerBtn"]}</BtnPrimary>
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