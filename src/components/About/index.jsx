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
    ArtFlexColHalfWidthCentered,
    ArtisansP,
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
// import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <LanguageContext.Consumer>
            {theme => ( 
                <div>
                    <Section>
                        <Container>
                            <FireSections>
                                <Fire>
                                    <FireImg src="https://i.imgur.com/OHFgIHl.jpg?1" alt="An aerial view of a river of lava coming from a volcano" />
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
                                            {/* <Fade cascade> */}
                                                {theme["about"]["overlayPs"].map((p, index) => {
                                                    return(
                                                        <ImgBgP key={`imgbp${index}`}>{p}</ImgBgP>
                                                    )
                                                })}
                                            {/* </Fade> */}
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
                                    {/* <Fade> */}
                                        <Fusion>{theme["about"]["fusion"]}</Fusion>
                                    {/* </Fade> */}
                                </FlexRow>
                            </FlexRow>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            {/* <Fade cascade> */}
                                <H1>{theme["about"]["ourArtisans"]}</H1>
                                <Artisans>
                                        <ArtisansSect>
                                            <ArtFlexColHalfWidthCentered>
                                                <ArtisansImage src="https://i.imgur.com/l0rsraM.jpg" alt="A photo of Victor, one of the Guatevelas artisans" />
                                                <ArtisansImageCapt>{theme["about"]["victor"]}</ArtisansImageCapt>
                                            </ArtFlexColHalfWidthCentered>
                                            <ArtFlexColHalfWidthCentered>
                                                <ArtisansP>{theme["about"]["victorP"]}</ArtisansP>
                                            </ArtFlexColHalfWidthCentered>
                                        </ArtisansSect>
                                        <ArtisansSect>
                                            <ArtFlexColHalfWidthCentered>
                                                <ArtisansImage src="https://i.imgur.com/dQA7WOy.jpg" alt="A photo of Edwin, one of the Guatevelas artisans" />
                                                <ArtisansImageCapt>{theme["about"]["edwin"]}</ArtisansImageCapt>
                                            </ArtFlexColHalfWidthCentered>
                                            <ArtFlexColHalfWidthCentered>
                                                <ArtisansP>{theme["about"]["edwinP"]}</ArtisansP>
                                            </ArtFlexColHalfWidthCentered>
                                        </ArtisansSect>
                                </Artisans>
                            {/* </Fade> */}
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <StaggeredH1>{theme["about"]["how"]}</StaggeredH1>
                            <StaggeredHolder>
                                {/* <Fade cascade> */}
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
                                            <StaggeredImg src="https://i.imgur.com/KihTwxz.jpg" alt="A photo of an artisan sawing PVC pipe to make a custom candle mold" />
                                                
                                            
                                        </StaggeredInside>
                                    </Staggered>
                                    <Staggered>
                                        <StaggeredInside className="flex-col-reverse">
                                            <StaggeredImg src="https://i.imgur.com/jld2Rpd.jpg" alt="A photo of an artisan melting down the candle wax and adding dye" />
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
                                            <StaggeredImg src="https://i.imgur.com/kuvSWhJ.jpg" alt="A photo of an artisan holding a recently-decorated blue patterned Guatevelas candle and buffing the outer design with a towel" />
                                        </StaggeredInside>
                                    </Staggered>
                                {/* </Fade> */}
                            </StaggeredHolder>
                        </Container>
                    </Section>

                    <VideoSection>
                        <VideoSectionContent>
                            {/* <Fade cascade> */}
                                <FlexCol>
                                    <FooterH1>{theme["about"]["footerH1"]}</FooterH1>
                                    <BtnPrimary href="/products">{theme["about"]["footerBtn"]}</BtnPrimary>
                                </FlexCol>
                            {/* </Fade> */}
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