import { MouseEventHandler } from "react";

interface IPerson {
  name?: string
  height?: string
  mass?: string
  gender?: string
  homeworld?: string
}

interface IPersonList extends IPerson {
  onSelect: MouseEventHandler
  selected: boolean
}

export { IPerson, IPersonList }