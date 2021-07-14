import React from 'react'
import styled from 'styled-components';

    const Button = styled.button`
    color: red;
    border: 1px solid green;
    `;

    const CardOne = styled.div`
        color: green;
        border: 1px solid darkblue;
        width: "80%";
        height: "20%";
    `

    const CardTwo = styled.div`
        color: pale;
        background-color: gray;
        border: 1px solid orange;
        width: "60%":
        height: "15%";
    `

    const CardThree = styled.div`
        color: blue;
        background-color: cyan;
        border: 1px solid black;
        width: 50;
        height: 20;
    `

    const CardFour = styled.div`
        color: darkred;
        background-color: pink;
        border: 1px dashed blue;
        width: 60;
        height: 20;
    `

    function Cards() {

    return (
        <div>
            <CardOne>
             <Button>Button</Button>
            </CardOne>    

            <CardTwo>
                <Button>Button</Button>
            </CardTwo> 

            <CardThree>
                <Button>Button</Button>
            </CardThree>

            <CardFour>
                <Button>Button</Button>
            </CardFour> 

        </div>
    )
}

export default Cards
