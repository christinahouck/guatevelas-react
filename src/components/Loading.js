import React from 'react';
import { LanguageContext } from '../languageContext';

export default function Loading() {
    return (
        <LanguageContext.Consumer>
            {theme => (
                <div className="loading">
                    <h1 className="loading-h1">{theme.notFoundLoading.loading}...</h1>
                </div>
            )}
        </LanguageContext.Consumer>
    )
}
