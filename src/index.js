import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider>
                  <Router><App /></Router>
                </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
