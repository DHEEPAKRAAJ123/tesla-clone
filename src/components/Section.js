import React from 'react';
import styled from 'styled-components';
function Section() {
  return (
  <Wrap>
      <Itemtext>
          <h1>Model - S</h1>
          <p>Order online for Touchless delivery </p>
      </Itemtext>
      <Buttons>
          
      <ButtonGroup>
    
          <LeftButton>
                Existing Inventory
          </LeftButton>
          <RightButton>
              Custom Order
              </RightButton>  
      </ButtonGroup>
      <Downarrow src="images/images/down-arrow.svg" />
      </Buttons>
  </Wrap>
  
  );
}
const Wrap = styled.div `
    width:100vw;
    height:100vh; 
    background-size:cover;
    background-image: url('/images/images/model-s.jpg' );
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

`
const Itemtext = styled.div `
    padding-top:15vh;
    text-align:center;  
`
const ButtonGroup = styled.div `
    display:flex;
    // flex-direction:column;
    // justify-content:center;
    // align-items:center;
    margin-bottom:30px;
`
const LeftButton = styled.div `
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase; 
    font-size:12px;
    cursor:pointer;
  
   
`
const RightButton = styled(LeftButton) `
`
const Downarrow = styled.img `
    margin-top:20px;
    height:40px;
`
const Buttons = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export default Section;
