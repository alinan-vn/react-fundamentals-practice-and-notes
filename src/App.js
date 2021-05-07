import './scss/main.scss';

import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './components/global/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route exact path='/function-components-practice' component={} />
      </BrowserRouter>
    </div>
  );
}

export default App;
