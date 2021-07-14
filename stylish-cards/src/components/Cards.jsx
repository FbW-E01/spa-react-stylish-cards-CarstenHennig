import React from 'react'
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import CloseButton from 'react-bootstrap/CloseButton'
// import { lightsalmon } from 'color-name';

    const Button = styled.button`
        color: red;
        background-color: white;
        border: 1px solid green;
        border-radius: 25px;
        width: 70px;
        height: 25px;
    `

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

    const Images = styled.img`
        // border: 1px solid black;
        display: inline-block;
    `

    const CardOne = styled.div`
        // background-color: rgba(46, 243, 9, 0.2); 
        color: rgba(46, 243, 9, 0.2);
        border: 1px solid darkblue;
        margin: "20px";
        padding: "10px";
        box-shadow: 4px 6px 20px black;
        border-radius: 25px;
        width: 80;
        height: 20;
    `

    const CardTwo = styled.div`
        color: pale;
        background-color: lightgray;
        border: 3px double orange;
        border-radius: 75px;
        box-shadow: 4px 4px 15px pink;
        width: "60%":
        height: "15%";
        `

    const CardThree = styled.div`
        color: blue;
        background-color: lightcyan;
        border: 3px dotted black;
        border-radius: 50px;
        box-shadow: 6px 6px 10px orange;
        width: 50;
        height: 20;
    `

    const CardFour = styled.div`
        color: darkred;
        background-color: pink;
        border: 1px dashed blue;
        border-radius: 20px;
        box-shadow: 5px 2px 20px blue;
        width: 60;
        height: 20;
    `

    function Cards() {

    return (
        <div style={{display: "grid", gridTemplateRows: "300px 300px", gridTemplateColumns: "1fr 1fr", gap: "20px"}}>
        
            <CardOne>
                <Heading>This is a <Badge variant="secondary" class=" badge">Heading</Badge></Heading>
                <SubHeader>This is a Subheading</SubHeader>
                <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                <Links><a href="www.digitalcareerinstitute.org">Digital Career Institute</a></Links>
                <div>
                <Images src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8bOcoYN8rGzfEkQMzK0fLR2PUfPcsOM8nu8fw4UtCnsOj2+P1MYtT8/f+5wu4AL8lkddmPm+K/x++Gk+BXbdgALMh7id7n6voAKcj09v3k6Pk+VtF2ht2ttuowSs5sfNpEW9Kbp+Zxgdvd4fctSM2Ll+KAj+DW2/WttutUadalr+iXo+a0ve1md9kvSs83gpX/AAAE7UlEQVR4nO2c6ZaqOhBGJaIGG5FWnEdwwKk97/92176ApphOe5Y2UOvbPwNo7RUIBSRVqwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB2WStHBvBhr3Ox6PcfxIxy/y8nR+FqcdpqUtsJkz8bQbG70iS2F0Aiyx8VwNlrZMTlWhuYy3Y+NodkTMtWPi+HUkekdyMbQzzhD2Rh2cwRZGB7aWdcgF8NRniAHw2b2KMPEcDRMWAklcat+1rZti4Tezh1cPyOOVTc8xgXFerk1q26lYC7oOGOvjtOiY3otY3qSSndWdESvptFSDeW8WXRAL+eojqSi1S06ntezVw3tddHhvIG1rZ6k9aLDeQMnZSiVHaPocF6P5aqGC0a3wYip+lwhvaLDeQMGMTwXHc4boIYfRYfzBmBYfWBYfWBYBoxuHvXmzDDzjn7GkP7Vr2V4dTm08xCrzsJrZIXzlGFT+auh+LUsvd7KfRmoCSGl1E+X9Gf35wyVvxJ64w0yqfzNMIhHDsVmm3I0G8PvkGz3I/nowMnwJiAX4/jRvAxv3TiIn6nMDG8Op1gvsjPU7AEdU/kZanJBjmZoqE2IRvUMBSG1E+fqaFM9Q01rKXx/KUtokjdqVTMU825f5etjf13J2Edsob73rZqh7MSzFmu69dzYVAt7/direoZpT0qmtyLdKFr9+zYehrd9dKIo/ftuXAxr9R0ZcP/ch1M2hrUL6UT7/nKbj+FM/QKjyUHUzsew5tFvvVECzshwSzIcGY2mjAyttXqa2r2wmZFh7UwuxE24IyfDhnrDkJ3wQuRkOOsohmJ1CFo5GZrqhShaYfbNyZDOnJHHoJGV4XmiGl6CRlaGXWI4ChpZGTaI4TVoZGV4IPO7TkEjK8OZJDfEYE9WhmM1M5UuQ0ODGM5hmAIM38Q/GnK8DulIE75ZZWW4JXeL8E0NK8MmueOvg0ZWhn2StflBIyvDI/tnix55PlwGjZwMzY1yHQqN4TP+WF1ZwfI9TZP9u7Yleee9DhcZMjK0yAInOxxKn1tvUW5Dg3xBtKNVeNO5anjJOjqg3IZ0naEefXt6at1TqQ2nA/LZ4nTfQNauufkzm0tt2CezbuzH6UjXH/YzDg8os6GhdtUtusN9C8l07M+8We+lNvToXIzPx9m4JNen9pX3VyU27NMpbuL42NQkp6/Y5c3AL69hfU66ULSVOabjOZGX7Zzl6mU1tPo7OrNt6Chb4zUV5MrLrKlQUsOD36IOQieTvUk2973ZPnmNmTENMZUSGaUwpLdsc9x32vH5l9InOyVqm2hS7jqDqLLJ9bq8714CQ6EPVE5tfTJMxO/G5us7qfVpQkh9mhIYKqEFpMwSnsTT65/XGCqD4d+Rg0Tu6fy0TlQlDOX8kPiFrZunWDFDoaUVL/lpvbYKGIpW+jNuL31af/UMpbykZ3VTJ7sXq2Qo/2Tn1Z6edS1Wx1BMOjlZtdWdT9J/pyqGQrb3+TW8xrfsJ60fK2EopL1ykneJONu9K3PrCBdlGM9jYtxiXg3Os5/U1rHG3VFH/7+k4ON4NWtTi0Rrv2Z4eNT/S2G92J/7ibWxOZjb+tLb+74/Clhsvu6GM0dhn7Zw+i1YRi7/Vh/QssyIqaU2863VDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAC+Q+NW3HxyhfKsgAAAABJRU5ErkJggg==" width="34" height="34"></Images>
                </div>
            </CardOne>      

            <CardTwo>
                <Heading>This is a <Badge variant="secondary">Heading</Badge></Heading>
                <SubHeader>This is a Subheading</SubHeader>
                <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                <Button variant="Danger">Button</Button>
                <div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                    </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
            </CardTwo> 

            <CardThree>
                <Heading>This is a <Badge variant="secondary">Heading</Badge></Heading>
                <SubHeader>This is a Subheading</SubHeader>
                <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                <div style={{display: 'inline-block'}}>
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="secondary">1</Button>{' '}
                        <Button variant="secondary">2</Button>{' '}
                        <Button variant="secondary">3</Button>{' '}
                        <Button variant="secondary">4</Button>
                    </ButtonGroup>
                    <InputGroup>
                        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                        <FormControl
                            type="text"
                            placeholder="Input group example"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon"
                        />
                    </InputGroup>
                </ButtonToolbar>            
                </div>
            </CardThree>

            <CardFour>
                 <Heading>This is a <Badge variant="secondary">Heading</Badge></Heading>
                 <SubHeader>This is a Subheading</SubHeader>
                 <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                 <div style={{display: 'inline-block'}}>
                     <CloseButton />
                </div>
            </CardFour> 

        </div>
    )
}

export default Cards
