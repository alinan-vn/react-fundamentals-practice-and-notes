import React, {useState} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function UseStatePractice(){

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    function updateText(){
        const inputText = document.querySelector('#input-text');
        console.log(inputText.value);
        setText(inputText.value);
    }

    return(
        <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle tag="h5">"useState" Practice example</CardTitle>
                <CardText>You clicked { count } times!</CardText>
                <Button onClick={() => setCount(count + 1)}>Click Me!</Button>
            </Card>
            <Card body inverse style={{ backgroundColor: 'green', borderColor: 'green' }}>
                <CardTitle tag="h5">"useState Practice example</CardTitle>
                <CardText>Current text says: "{ text }"</CardText>
                <input id='input-text' placeholder='type new text here!' /><br />
                <Button onClick={updateText}>Update Text!</Button>
            </Card>
        </div>
    )
}

export default UseStatePractice;
