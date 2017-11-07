import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import * as actions from './actions/index';
import configureStore from './store/store';

const {store} = configureStore()

store.dispatch(actions.loadContents())

ReactDOM.render(<MuiThemeProvider>
                  <Router>
                    <Provider store={store}>
                        <App />
                    </Provider>
                  </Router>
                </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
