import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const header = (): any => (
 <Header>
   <div className="logo">
     <Logo />
   </div>
   <h3 className="title">
     Character information
   </h3>
 </Header>
)

export default header;

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: ${props => props.theme.palette.common.headers};
    margin: 0 auto;
    width: max-content;
    text-transform: uppercase;
    position: relative;

     &::before, &::after {
       content: '';
       width: 50%;
       display: flex;
       border-bottom: 2px solid ${props => props.theme.palette.common.headers};
       position: absolute;
       top: 0.65rem;
     }

     &::before {
       left: calc(-50% - 1.2rem);
     }

     &::after {
       right: calc(-50% - 1.2rem);
     }
  }
`