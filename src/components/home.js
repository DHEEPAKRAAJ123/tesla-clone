import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function home() {
  return (
    <Container >
        <Section 
         title="Model S"
         description="Order online for Touchless Delivery"
         backgroundImg="model-s.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model Y"
          description="Order online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
         title="Model X"
         description="Order online for Touchless Delivery"
         backgroundImg="model-x.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"
        />
         <Section 
         title="Lowest Cost Solar Panels In America"
         description="Money back guarantee"
         backgroundImg="solar-panel.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
        />
         <Section 
         title="Solar For New Roof In America"
         description="Solar roof costs less than a new roof"
         backgroundImg="solar-roof.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
        />
         <Section 
         title="Accessories"
         description=""
         backgroundImg="accessories.jpg"
         leftBtnText="Order now"

        />
    </Container>
      
  );
}
const Container = styled.div `
  height:100vh;
  
`
export default home;
