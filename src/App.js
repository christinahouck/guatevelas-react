import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { LanguageContext } from './languageContext';
import _debounce from 'lodash/debounce';

import Loading from './components/Loading';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

import { styleVars } from './themes.js';
import { enTheme } from './contexts/languages/enTheme';
import { esTheme } from './contexts/languages/esTheme';
import Footer from './components/Footer';

class DynamicImport extends React.Component { 
  state = {
    component: null
  }
  componentDidMount() {
    // alert('This website is a work in progress. Not all of its content is finalized or up-to-date.');
    this.props.load()
      .then((mod) => this.setState(() => ({
        component: mod.default
      })))
  }
  render() {
    return this.props.children(this.state.component)
  }
}
const Shop = (props) => (
  <DynamicImport load={() => import('./components/Shop/index.js')}>
    {(Component) => Component === null 
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)
const ProductPage = (props) => (
  <DynamicImport load={() => import('./components/ProductPages/index.jsx')}>
    {(Component) => Component === null 
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)
const About = (props) => (
  <DynamicImport load={() => import('./components/About/index.jsx')}>
    {(Component) => Component === null 
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)
const Home = (props) => (
  <DynamicImport load={() => import('./components/Home/index.jsx')}>
    {(Component) => Component === null 
      ? <Loading />
      : <Component {...props} />
    }
  </DynamicImport>
)

class App extends React.Component {
  state = {
    language: 'en',
    isTop: true,
    color: 'Atitlán Blue',
    colorIndex: 0
  }

  componentWillMount() {
    this.scrollDebounced = _debounce(e => {
      this.handleScroll(e);
    }, 50);
    document.addEventListener('scroll', this.scrollDebounced);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollDebounced);
  }
  
  handleScroll = (e) => {
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  }
  setLanguage = (newLanguage) => {
    this.state.language === 'en' ? this.setState({ language: 'es'}) : this.setState({ language: 'en'})
	}
  toggleColor = (event, newColor, index) => {
      this.setState({ color: newColor, colorIndex: index});
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
                    isScrolledToTop={this.state.isTop}
                  ></Nav>
                  <React.Suspense fallback={<Loading />} >
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route 
                        exact 
                        path='/products' 
                        render={(props) => (
                          <Shop 
                            {...props} 
                            color={this.state.color} 
                            colorIndex={this.state.colorIndex}
                            toggleColor={this.toggleColor}
                          />
                        )}
                      />
                      <Route exact path='/productos' component={Shop} />
                      <Route path='/about' component={About} />
                      <Route path='/sobre-nosotros' component={About} />
                      <Route 
                        path='/products/:prodId' 
                        // component={ProductPage} 
                        render={(props) => (
                          <ProductPage 
                            {...props} 
                            color={this.state.color} 
                            colorIndex={this.state.colorIndex}
                            toggleColor={this.toggleColor}
                          />
                        )}
                      />
                      <Route path='/productos/:prodId' component={ProductPage} />
                      <Route component={NotFound} />
                    </Switch>
                    <Footer
                      language={this.state.Language}
                    ></Footer>
                  </React.Suspense>
              </div>
            </ThemeProvider>
          </LanguageContext.Provider>
      </Router>
    )
  }
};

export default App;
