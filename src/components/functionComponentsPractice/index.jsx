import React from 'react';

import UseEffectPractice from './useEffectPractice/index';
import UseStatePractice from './useStatePractice/index';


class FunctionComponentPractice extends React.Component {

    render(){
        return(
            <div>
                <br /><hr /><br />
                <h1>'useEffect practice examples'</h1>
                <UseEffectPractice />

                <br /><hr /><br />
                <h1>'useState' practice examples:</h1>
                <UseStatePractice />
            </div>
        )
    }
}

export default FunctionComponentPractice;