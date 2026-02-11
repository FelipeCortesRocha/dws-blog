/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { DropdownContainer } from './styles'
import { store } from '../../store'
import { ChevronDown } from 'lucide-react'

interface Item {
  id: string
  name: string
}

interface DropdownProps {
  title: string
  items: Item[]
  selectedItems: string[],
  setFunction: any
}

function Dropdown({ title, items, selectedItems, setFunction }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef: any = useRef(null);

  const handleSelect = (selectElement: HTMLSelectElement) => {
    const selectedIds = [...selectElement.selectedOptions].map(((option: HTMLOptionElement) => option.value))

    store.dispatch(setFunction(selectedIds))
  }
  
  function handleClickOutside(event: MouseEvent) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
  }, [isOpen])

  const getDropDownLabel = () => {
    if (selectedItems.length === 0) {
      return title
    }

    const selectedNames = items.filter(item => selectedItems.includes(item.id)).map(item => item.name)

    const ITEMS_TO_SHOW = 1

    if (selectedNames.length > ITEMS_TO_SHOW) {
      return `${selectedNames.slice(0, ITEMS_TO_SHOW).join(', ')} +${selectedNames.length - ITEMS_TO_SHOW}`
    }
    
    return `${selectedNames.join(', ')}`
  }

  return (
    <DropdownContainer ref={wrapperRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'open': ''}`}>{getDropDownLabel()} <ChevronDown size={24} /></button>
      
      {isOpen && (
        <select onChange={(event) => handleSelect(event.target)} multiple>
          {items.map(item => (
            <option 
              key={item.id}
              value={item.id} 
              label={item.name}
              className={`${selectedItems.includes(item.id) ? 'selected': ''}`}
            >{item.name}</option>
          ))}
        </select>
      )}
    </DropdownContainer>
  )
}

export default Dropdown