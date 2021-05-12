import React from 'react';
import {Button} from 'reactstrap';

import UseEffectPractice from './useEffectPractice/index';
import UseStatePractice from './useStatePractice/index';


class FunctionComponentPractice extends React.Component {

    handleRedirection = (direction) => {
        if (direction === "useEffect"){
            this.props.history.push("/useEffect-practice")
        } else if (direction === "useState"){
            this.props.history.push("/useState-practice")
        }
    }

    render(){
        return(
            <div className='functionComponent'>
                <br /><hr /><br />
                <Button className='functionComponent-btn' onClick={() => this.handleRedirection("useEffect")}>View useEffect examples</Button>

                <br /><hr /><br />
                <Button className='functionComponent-btn' onClick={() => this.handleRedirection("useState")}>View useState examples</Button>
            </div>
        )
    }
}

export default FunctionComponentPractice;