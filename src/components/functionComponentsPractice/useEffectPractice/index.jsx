import React, {useEffect, useState} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function UseEffectPractice(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return(
        <div className='useEffect'>
            
            <h1>'useEffect practice examples'</h1>

            <Card className='useEffect-card' body inverse style={{ backgroundColor: '#999', borderColor: '#555' }}>
                <CardTitle tag="h5">"useEffect" Practice example</CardTitle>
                <CardText>You clicked { count } times!</CardText>
                <Button onClick={() => setCount(count + 1)}>Click Me!</Button>
            </Card><br />
        </div>
    )
}

export default UseEffectPractice;

// function Example() {
//     const [count, setCount] = useState(0);
  
//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(() => {
//       // Update the document title using the browser API
//       document.title = `You clicked ${count} times`;
//     });
  
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//     );