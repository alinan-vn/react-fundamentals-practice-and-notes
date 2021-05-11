import React, {useEffect, useState} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function UseEffectPractice(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    const [updateCount, setUpdateCount] = useState(0);
    const [customText, setCustomText] = useState('');

    function updateCustomText(){
        let customTextInput = document.querySelector('#customText');
        setCustomText(customTextInput.value);
    }

    useEffect(() => {
        setUpdateCount(updateCount + 1);
    })

    return(
        <div className='useEffect'>

            <h1>'useEffect practice examples'</h1>

            <Card className='useEffect-card' body inverse style={{ backgroundColor: '#999', borderColor: '#555' }}>
                <CardTitle tag="h5">"useEffect" Practice example</CardTitle>
                <CardText>You clicked { count } times!</CardText>
                <Button onClick={() => setCount(count + 1)}>Click Me!</Button>
            </Card><br />

            <Card className='useEffect-card' body inverse style={{ backgroundColor: '#999', borderColor: '#555' }}>
                <CardTitle tag="h5">"useEffect" Practice example</CardTitle>
                <CardText>No. of times values were updated: {updateCount}</CardText>
                <CardText>***NOTE that the value is updated automatically in the useEffect Hook</CardText>
                <CardText>This is your custom text: {customText}</CardText>
                <input id='customText' placeholder='type some stuff!' />
                <Button onClick={updateCustomText}>Update the text</Button>
            </Card><br />

        </div>
    )
}

export default UseEffectPractice;
