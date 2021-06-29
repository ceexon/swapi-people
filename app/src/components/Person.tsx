import React from "react"
import { ListItemEl, PersonItemEl } from "./styles"
import { IPerson, IPersonList } from "./types"

const Person = ({ gender, height, homeworld, mass, name }: IPerson) => {
  return <div>
    <PersonItem label='Name' value={name} />
    <PersonItem label='Gender' value={gender} />
    <PersonItem label='Height' value={height} units='cm' />
    <PersonItem label='Planet' value={homeworld} />
    <PersonItem label='Mass' value={mass} units='kg' />
  </div>
}

const PersonItem = ({ label, value, units }: any): any => <PersonItemEl>
  <span className="label">
    {label} {units && ` (${units})`}
  </span>
  <span className="value">
    {value}
  </span>
</PersonItemEl>

export const ListItem = ({ name, gender, onSelect, selected }: IPersonList) => (
  <ListItemEl onClick={onSelect} className={selected ? 'selected' : ''}>
    <h3 className='name'>
      {name}
    </h3>
    <p className="gender">
      Gender: {gender}
    </p>
  </ListItemEl>
)

export default Person