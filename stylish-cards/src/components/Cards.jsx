import React from 'react'
import styled from 'styled-components';

    const Button = styled.button`
        color: red;
        border: 1px solid green;
    `;

    const Heading = styled.h3`
        color: tomato;    
    `

    const SubHeader = styled.h5`
        color: darkred;
    `

    const Text = styled.p`
        color: darkgreen;
        font-family: monospace;
        font-style: normal;
        font-weight: bold;
        font-display: inline;
    `

    const Links = styled.a`
        color: gray;
        font-style: underline;
        font-size: small;
    `

    const CardOne = styled.div`
        background-color: rgba(46, 243, 9, 0.2); 
        color: rgba(46, 243, 9, 0.2);
        border: 1px solid darkblue;
        width: 80;
        height: 20;
    `

    const CardTwo = styled.div`
        color: pale;
        background-color: lightgray;
        border: 1px solid orange;
        width: "60%":
        height: "15%";
    `

    const CardThree = styled.div`
        color: blue;
        background-color: lightcyan;
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
                <Heading>This is a Heading</Heading>
                <SubHeader>This is a Subheading</SubHeader>
                <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                <Links><a href="www.digitalcareerinstitute.org">Digital Career Institute</a></Links>
            </CardOne>    

            <CardTwo>
                <Heading>This is a Heading</Heading>
                <SubHeader>This is a Subheading</SubHeader>
                <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                <Button>Button</Button>
            </CardTwo> 

            <CardThree>
                <Heading>This is a Heading</Heading>
                <SubHeader>This is a Subheading</SubHeader>
                <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                <Button>Button</Button>
            </CardThree>

            <CardFour>
                 <Heading>This is a Heading</Heading>
                 <SubHeader>This is a Subheading</SubHeader>
                 <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                <Button>Button</Button>
            </CardFour> 

        </div>
    )
}

export default Cards
