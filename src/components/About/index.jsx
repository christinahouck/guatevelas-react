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
    FlexColHalfWidth
 } from './styles';

export default function About() {
    return (
        <div>
            <Section>
                <Container>
                    <FlexRow>
                        <FlexCol>
                            <H1>Some stuff about fire</H1>
                            <p>Mayans, Rituals, Birthday candles, purity</p>
                        </FlexCol>
                    </FlexRow>
                </Container>
            </Section>
            <Section>
                <Container>
                    <FlexRow>
                        <FlexCol>
                            <H1>Some stuff about Guatemalan textiles</H1>
                            <p>Read all about it</p>
                        </FlexCol>
                    </FlexRow>
                </Container>
            </Section>
            <Section>
                <Container>
                    <FlexRow>
                        <FlexCol>
                            <H1>The artisans and their process</H1>
                            <p>Read all about it</p>
                        </FlexCol>
                    </FlexRow>
                </Container>
            </Section>
            <Section>
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
            </Section>

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