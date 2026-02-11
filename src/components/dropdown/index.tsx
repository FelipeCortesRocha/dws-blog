/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { DropdownContainer } from './styles'
import { store } from '../../store'
import { ChevronDown } from 'lucide-react'

interface Item {
  id: string
  name: string
}

interface SelectProps {
  title: string
  items: Item[]
  selectedItems: string[],
  setFunction: any
}

function Dropdown({ title, items, setFunction }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectElement: HTMLSelectElement) => {
    const selectedIds = [...selectElement.selectedOptions].map(((option: HTMLOptionElement) => option.value))

    store.dispatch(setFunction(selectedIds))
  }

  return (
    <DropdownContainer>
      <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'open': ''}`}>{title} <ChevronDown size={24} /></button>
      
      {isOpen && (
        <select onChange={(event) => handleSelect(event.target)} multiple>
          {items.map(item => (
            <option 
              key={item.id}
              value={item.id} 
              label={item.name}
            >{item.name}</option>
          ))}
        </select>
      )}
    </DropdownContainer>
  )
}

export default Dropdown