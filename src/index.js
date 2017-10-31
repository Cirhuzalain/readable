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
import { PersistGate } from 'redux-persist/es/integration/react';

const {store, persistor} = configureStore()

store.dispatch(actions.loadContents())

ReactDOM.render(<MuiThemeProvider>
                  <Router>
                    <Provider store={store}>
                      <PersistGate persistor={persistor} loading={null}>
                        <App />
                      </PersistGate>
                    </Provider>
                  </Router>
                </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
