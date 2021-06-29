import styled from "styled-components"

import { WithClick, WithSelected } from "../styled"

export const PeoplePage = styled.div<WithSelected>`
  width: 100%;
  max-width: 1280px;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3rem;
  max-height: calc(100vh - 180px - 5rem);
  overflow: hidden;
  margin-bottom: 2.5rem;

  ${props => props.selected ? `
    grid-template-columns: minmax(300px, 1fr) 1fr;
  `: ''}

  & > div {
    align-self: start;
  }

  .page-left {
    position: relative;
    display: block;
    overflow: auto;
    height: 100%;
    max-height: inherit;
    padding: ${props => props.selected ? '0.5rem 0.5rem 0 0' : 0};
  }

  .page-right {
    margin-top: 0.5rem;
    background-color: ${props => props.theme.palette.common.black}99;
    background-blend-mode: lighten;
    border-radius: 6px;
    padding: 2rem;
  }
`

export const PersonItemEl = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 0.5rem 0 0.75rem;
    display: block;
  }
  
  &:first-of-type {
    padding-top: 0;
  }
  
  &:last-of-type {
    padding-bottom: 0;
  }

  .label {
    color: ${props => props.theme.palette.common.white}99;
    border-bottom: 1px solid ${props => props.theme.palette.common.white}99;
    text-transform: capitalize;
  }

  .value {
    color: ${props => props.theme.palette.common.white};
    
    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  grid-gap: 2rem;
  justify-content: space-evenly;
`

export const ListItemEl = styled.div<WithClick>`
  border-radius: 6px;
  padding: 1rem;
  background-color: ${props => props.theme.colorTheme}33;
  cursor: pointer;

  &:hover, &.selected {
    transition: all 400ms ease-in-out linear;
    box-shadow: ${props => props.theme.palette.common.headers}99 0px 0px 10px 3px, rgb(0 0 0) 0px 0px 10px;
  }

  &.selected {
    border: 1px solid ${props => props.theme.palette.common.headers};
  }

  .name {
    margin-bottom: 0.75rem;
  }

  .gender {
    color: ${props => props.theme.colorTheme}99;
    font-size: 12px;
  }
`

export const LoaderBox = styled.div`
  margin: 10% auto;
  max-width: 100px;
  max-height: 100px;
  display: flex;
`

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem auto 0;
  position: sticky;
  top: calc(120px + 2rem);

  .page-item {
    color: ${props => props.theme.palette.common.white};
    border: 1px solid ${props => props.theme.palette.common.white};
    font-size: 13px;
    border-radius: 50%;
    height: 28px;
    width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;

    &.active {
      color:  ${props => props.theme.palette.common.black};
      font-size: 14px;
      font-weight: bold;
      border-color: ${props => props.theme.palette.common.headers};
      background-color: ${props => props.theme.palette.common.headers};
    }
  }
`