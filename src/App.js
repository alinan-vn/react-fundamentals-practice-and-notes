import './scss/main.scss';

import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './components/global/navigation/index.jsx';

import FunctionComponentPractice from './components/functionComponentsPractice/index.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route exact path='/function-components-practice' component={FunctionComponentPractice} />
      </BrowserRouter>
    </div>
  );
}

export default App;
