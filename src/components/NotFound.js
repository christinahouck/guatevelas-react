import React from 'react';
import { LanguageContext } from '../languageContext';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <LanguageContext.Consumer>
            {theme => (
                <div className="notFound">
                    <h1 className="loading-h1">404</h1>
                    <h2 className="loading-h2">{theme.notFoundLoading.notFound}</h2>
                    <Link className="loading-btn" to="/products">{theme.notFoundLoading.notFoundButton}</Link>
                </div>
            )}
        </LanguageContext.Consumer>
    )
}
