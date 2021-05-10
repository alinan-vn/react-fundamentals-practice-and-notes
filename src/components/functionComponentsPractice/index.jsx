import React from 'react';

import UseEffectPractice from './useEffectPractice/index';
import UseStatePractice from './useStatePractice/index';


class FunctionComponentPractice extends React.Component {

    render(){
        return(
            <div>
                <br /><hr /><br />
                <UseEffectPractice />

                <br /><hr /><br />
                <UseStatePractice />
            </div>
        )
    }
}

export default FunctionComponentPractice;