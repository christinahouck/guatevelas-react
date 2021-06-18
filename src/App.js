import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { LanguageContext } from './languageContext';

import Loading from './components/Loading';
import Products from './components/Products';
import Nav from './components/Nav';
import ProductPage from './components/ProductPage';
import Home from './components/Home';
import About from './components/About';

import { styleVars } from './themes.js';
import { enTheme } from './contexts/languages/enTheme';
import { esTheme } from './contexts/languages/esTheme';

class App extends React.Component {
  state = {
    language: 'en',
  }
  setLanguage = (newLanguage) => {
    this.state.language === 'en' ? this.setState({ language: 'es'}) : this.setState({ language: 'en'})
	}
  render() {
    const { language } = this.state;
    var lang = language === 'en' ? enTheme : esTheme;

    return (
      <Router>
          <LanguageContext.Provider value={lang}>
            <ThemeProvider theme={styleVars}>
              <div className="App">
                  <Nav 
                    setLanguage={this.setLanguage} 
                    language={this.state.Language}
                  ></Nav>
                  <React.Suspense fallback={<Loading />} >
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/products' component={Products} />
                      <Route exact path='/productos' component={Products} />
                      <Route path='/about' component={About} />
                      <Route path='/sobre-nosotros' component={About} />
                      <Route path='/products/:prodId' component={ProductPage} />
                      <Route path='/productos/:prodId' component={ProductPage} />
                      <Route render={() => (<h1>404: not found</h1>)} />
                    </Switch>
                  </React.Suspense>
              </div>
            </ThemeProvider>
          </LanguageContext.Provider>
      </Router>
    )
  }
};

export default App;
