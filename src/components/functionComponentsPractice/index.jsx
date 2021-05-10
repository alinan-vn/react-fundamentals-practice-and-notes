import React from 'react';

import UseEffectPractice from './useEffectPractice/index';
import UseStatePractice from './useStatePractice/index';


class FunctionComponentPractice extends React.Component {

    render(){
        return(
            <div>
                <h1>Root index stuff goes here</h1>

                <div>
                    <h3>From root index, EFFECT title here</h3>
                    <UseEffectPractice />
                </div>

                <hr />
                <h1>'useState' practice examples:</h1>
                <UseStatePractice />
            </div>
        )
    }
}

export default FunctionComponentPractice;