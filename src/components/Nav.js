import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../languageContext';

export default function Nav({ version, setLanguage, isScrolledToTop }) {
    let scrolledClass;
    if (isScrolledToTop) {
        scrolledClass = 'unscrolled';     
    } else {
        scrolledClass = 'scrolled';
    }
    return (
        <LanguageContext.Consumer>
            {theme => (
                <NavHolder>
                    <NavDiv>
                        <NavContainer className={`nav-transition nav-${scrolledClass}`}>
                            <Link to='/'>
                                <FlexRowCenter>
                                    <Logo className={`nav-transition logo-${scrolledClass}`} src="../assets/logo_guatevelas.png" alt="Guatevelas logo" />
                                    <Brandmark className={`nav-transition brandmark-${scrolledClass}`} src="../assets/brandmark_guatevelas.png" alt="Guatevelas" />
                                </FlexRowCenter>
                            </Link>
                            <RightSideContainer>
                                <FlexRowCenter>
                                    <NavUl>
                                        <MenuOption className={`menu-item-${scrolledClass}`}>
                                            <Link to='/products'>
                                                {theme.nav.shop}
                                            </Link>
                                        </MenuOption>
                                    </NavUl>
                                    <NavUl>
                                        <MenuOption className={`menu-item-${scrolledClass}`}>
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
                </NavHolder>
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
const NavHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
    height: 100px;
`;
const NavDiv = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-shadow: ${props => props.theme.shadow};
    background-color: #fff;
`;
const NavContainer = styled(FlexRowCenter)`
    max-width: 1000px;
    width: 100%;
    padding: 8px;
    justify-content: space-between;
`;
const Logo = styled.img`
    width: auto;
    margin-top: 8px;
    margin-left: 16px;
`;
const Brandmark = styled.img`
    width: auto;
    margin-top: 8px;
    margin-left: 16px;
    @media (max-width: 500px) {
        display: none;
    }
`;
const RightSideContainer = styled(FlexRowCenter)`
    justify-content: flex-end;
`;
const MenuOption = styled.li`
    @media (max-width: 767px) {
        font-size: 18px;
    }
    @media (min-width: 768px) {
        font-size: 24px;
    }
    padding: 12px;
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
        @media (min-width: 768px) {
            margin-right: 40px;
        }
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
