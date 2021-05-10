import React, {useState} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function UseStatePractice(){

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [textObject, setTextObject] = useState({title: "", author: "", description: ""})

    function updateText(){
        const inputText = document.querySelector('#input-text');

        setText(inputText.value);
    }

    function updateTextDetails(){
        const titleText = document.querySelector('#title');
        const authorText = document.querySelector('#author');
        const descriptionText = document.querySelector('#description');

        setTextObject({
            ...textObject, 
            title: titleText.value,
            author: authorText.value,
            description: descriptionText.value
        })
    }



    return(
        <div className='useState'>

            <h1>'useState' practice examples:</h1>

            <Card className='useState-card' body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle tag="h5">"useState" Practice example</CardTitle>
                <CardText>You clicked { count } times!</CardText>
                <Button onClick={() => setCount(count + 1)}>Click Me!</Button>
            </Card><br />

            <Card className='useState-card' body inverse style={{ backgroundColor: 'green', borderColor: 'green' }}>
                <CardTitle tag="h5">"useState Practice example</CardTitle>
                <CardText>Current text says: "{ text }"</CardText>
                <input id='input-text' placeholder='type new text here!' /><br />
                <Button onClick={updateText}>Update Text!</Button>
            </Card><br />

            <Card className='useState-card' body inverse color="info">
                <CardTitle tag="h5">"useState Practice example</CardTitle>
                <CardText>Title: "{textObject.title}"</CardText>
                <CardText>Author: "{textObject.author}"</CardText>
                <CardText>Description: "{textObject.description}"</CardText>
                <hr />
                <input id='title' placeholder='type a title!' /><br />
                <input id='author' placeholder='type an author!' /><br />
                <input id='description' placeholder='type a description!' /><br />
                <Button onClick={updateTextDetails}>Update text details!</Button>
            </Card><br />
        </div>
    )
}

export default UseStatePractice;
