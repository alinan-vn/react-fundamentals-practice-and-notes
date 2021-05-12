import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './components/global/navigation/index.jsx';

import FunctionComponentPractice from './components/functionComponentsPractice/index.jsx';
import UseEffectPractice from './components/functionComponentsPractice/useEffectPractice/index';
import UseStatePractice from './components/functionComponentsPractice/useStatePractice/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route exact path='/function-components-practice' component={FunctionComponentPractice} />
        <Route exact path='/useEffect-practice' component={UseEffectPractice} />
        <Route exact path='/useState-practice' component={UseStatePractice} />
      </BrowserRouter>
    </div>
  );
}

export default App;
