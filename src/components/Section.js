import React from 'react';
import styled from 'styled-components';
function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {

  return (
  <Wrap bgImg = {backgroundImg}>
      <Itemtext>
          <h1>{title}</h1>
          <p>{description}</p>
      </Itemtext>
      <Buttons>
          
      <ButtonGroup>
    
          <LeftButton>
                {leftBtnText}
          </LeftButton>
          { rightBtnText && 
              <RightButton>
              {rightBtnText}
           </RightButton>  
          }
        
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
   // background-image: url('/images/images/mdoel-s.jpg' );
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/images/${props.bgImg}")` }

`
const Itemtext = styled.div `
    padding-top:15vh;
    text-align:center;  
`
const ButtonGroup = styled.div `
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px){
        flex-direction:column;
    }
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
    margin:8px;
   
`
const RightButton = styled(LeftButton) `
    background:white;
    opacity:0.65;
    color:black;
`
const Downarrow = styled.img `
   
    height:40px;
    animation:animateDown infinite 1.5s; 
    overflow-x:hidden;
`
const Buttons = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export default Section;
