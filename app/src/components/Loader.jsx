import React from "react";
import styled from "styled-components";

const loader = () => (
  <Loader>
    <div className="line"></div>
    <div className="line"></div>
  </Loader>
)

const Loader = styled.span`
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

  .line {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid transparent;
  }

  .line:nth-child(1) {
    position: absolute;
    width: 25px;
    height: 25px;
    border-top: 2px solid ${props => props.theme.palette.common.headers};
    border-bottom: 2px solid ${props => props.theme.palette.common.headers};
    animation: spin 800ms linear infinite;
  }

  .line:nth-child(2) {
    border-left: 2px solid ${props => props.theme.palette.common.headers};
    border-right: 2px solid ${props => props.theme.palette.common.headers};
    animation: spin 1200ms linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export default loader;