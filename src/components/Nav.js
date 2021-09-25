import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../languageContext';

export default function Nav({ version, setLanguage }) {
    return (
        <LanguageContext.Consumer>
            {theme => (
                <NavDiv>
                        <NavContainer>
                        <Link to='/'>
                            <FlexRowCenter>
                                <Logo src="../assets/logo_guatevelas.png" alt="Guatevelas" />
                                <Brandmark src="../assets/brandmark_guatevelas.png" alt="Guatevelas" />
                            </FlexRowCenter>
                        </Link>
                        <RightSideContainer>
                            <FlexRowCenter>
                                <NavUl>
                                    <MenuOption>
                                        <Link to='/products'>
                                            {theme.nav.shop}
                                        </Link>
                                    </MenuOption>
                                </NavUl>
                                <NavUl>
                                    <MenuOption>
                                        <Link to='/about'>
                                            {theme.nav.about}
                                        </Link>
                                    </MenuOption>
                                </NavUl>
                            </FlexRowCenter>
                            <FlexRowCenter>
                                { theme.lang === 'es' ? (
                                    <LanguageButton onClick={() => setLanguage('en')}>
                                        <img className="flag" src="https://i.imgur.com/8Hugc1D.png" alt="Set website language to English" />
                                        <LanguageName>English</LanguageName>
                                    </LanguageButton>
                                ) : (
                                    <LanguageButton onClick={() => setLanguage('es')}>
                                        <img className="flag" src="https://i.imgur.com/WNVIvkO.png" alt="Leer este sitio web en Español" />
                                        <LanguageName>Espa&ntilde;ol</LanguageName>
                                    </LanguageButton>
                                )}
                            </FlexRowCenter>
                        </RightSideContainer>
                    </NavContainer>
            </NavDiv>
            )}
        </LanguageContext.Consumer>
            
    )
}

const FlexRowCenter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const NavDiv = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: ${props => props.theme.shadow};
    background-color: #fff;
    z-index: 999;
`;
const NavContainer = styled(FlexRowCenter)`
    max-width: 1000px;
    width: 100%;
    padding: 8px;
    justify-content: space-between;
`;
const Logo = styled.img`
    height: 80px;
    width: auto;
`;
const Brandmark = styled.img`
    height: 70px;
    width: auto;
    margin-top: 8px;
    margin-left: 16px;
`;
const RightSideContainer = styled(FlexRowCenter)`
    justify-coentent: flex-end;
`;
const MenuOption = styled.li`
    font-size: 24px;
    padding: 24px;
    list-style-type: none;
    text-decoration: none;
    font-family: ${props => props.theme.secondaryFont}, serif;
    color: ${props => props.theme.green};
    &:hover, 
    &:active {
        background: ${props => props.theme.green6}; 
        border-radius: 6px;
    }
    & > a {
        color: ${props => props.theme.green};
        text-decoration: none;
    }
`;
const NavUl = styled.ul`
    padding-left: 0;
    &:nth-child(2) {
        margin-left: 8px;
        margin-right: 40px;
    }
`;
const LanguageButton = styled.button`
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px transparent;
    border-radius: 6px;
    width: 70px;
    &:hover {
        box-shadow: ${props => props.theme.shadow};
    }
`;
const LanguageName = styled.span`
    font-size: 14px;
    margin-top: 8px;
    color: ${props => props.theme.green};
    font-family: ${props => props.theme.secondaryFont}, serif; 
`;
