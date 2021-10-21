import React from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../languageContext';

export default function Footer({ version, setLanguage }) {
    return (
        <LanguageContext.Consumer>
            {theme => (
                <FooterHolder>
                    <FooterContainer>
                        <Contact href="mailto:guatevelas@gmail.com">{theme.footer.contact}</Contact>
                        <Copyright>&copy; Copyright 2021 Guatevelas</Copyright>
                        <Dev>{theme.footer.dev}<DevLink href="https://christinacodes.dev" target="_blank" rel="noopener">Christina</DevLink></Dev>
                    </FooterContainer>
                </FooterHolder>
            )}
        </LanguageContext.Consumer>
            
    )
}

const FooterHolder = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.lightestGray};
`;
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    padding: 30px 10px;
`;
const Contact = styled.a`
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 18px;
    color: ${props => props.theme.green};
    margin-bottom: 8px;
    &:hover,
    &:active {
        color: ${props => props.theme.green2};
    }
`;
const Copyright = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 16px;
    margin: 0;
    line-height: 1.2;
`;
const Dev = styled.p`
    font-family: ${props => props.theme.secondaryFont}, serif;
    font-size: 12px;
    margin: 10px;
`;
const DevLink = styled.a`
    color: ${props => props.theme.green};
    &:hover,
    &:active {
        color: ${props => props.theme.green4};
    }
`;