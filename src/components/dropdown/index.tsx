/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { DropdownContainer } from './styles';
import { store } from '../../store';
import { ChevronDown } from 'lucide-react';

interface Item {
  id: string;
  name: string;
}

interface DropdownProps {
  title: string;
  items: Item[];
  selectedItems: string[];
  setFunction: any;
  lateral: boolean;
  shouldUpdate?: boolean;
}

function Dropdown({ title, items, selectedItems, setFunction, lateral = false, shouldUpdate }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(lateral ? true : false);
  const [localSelectedItems, setLocalSelectedItems] = useState<string[]>([...selectedItems]);
  const wrapperRef: any = useRef(null);
  const selectRef: any = useRef(null);

  const handleSelect = (event: any) => {
    let newSelectedItems = [];

    if (lateral) {
      const value = event.target.value;
      if (localSelectedItems.includes(value)) {
        newSelectedItems = localSelectedItems.filter(item => item !== value);
      } else {
        newSelectedItems = [...localSelectedItems, value];
      }

      setLocalSelectedItems(newSelectedItems);
    } else {
      const selectedOptions = event.target.selectedOptions;
      newSelectedItems = Array.from(selectedOptions).map((option: any) => option.value);
      store.dispatch(setFunction(newSelectedItems));
    }

    selectRef.current.blur();
    setLocalSelectedItems(newSelectedItems);
  };

  function handleClickOutside(event: MouseEvent) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  const getDropDownLabel = () => {
    if (lateral || selectedItems.length === 0) return title;

    const selectedNames = items.filter(item => selectedItems.includes(item.id)).map(item => item.name);

    const ITEMS_TO_SHOW = 1;

    if (selectedNames.length > ITEMS_TO_SHOW) {
      return `${selectedNames.slice(0, ITEMS_TO_SHOW).join(', ')} +${selectedNames.length - ITEMS_TO_SHOW}`;
    }

    return `${selectedNames.join(', ')}`;
  };

  const handleDropdownToggle = () => {
    if (lateral) return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!lateral && isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, lateral]);

  useEffect(() => {
    store.dispatch(setFunction(localSelectedItems));
  }, [shouldUpdate]);

  return (
    <DropdownContainer ref={wrapperRef} className={`${lateral ? 'lateral' : ''}`}>
      <button onClick={handleDropdownToggle} className={`${isOpen ? 'open' : ''}`}>
        {getDropDownLabel()} <ChevronDown size={24} />
      </button>

      {isOpen && (
        <select ref={selectRef} value={lateral ? [] : localSelectedItems} id={`select-${title}`} onChange={handleSelect} multiple size={items.length}>
          {items.map(item => (
            <option key={item.id} value={item.id} label={item.name} className={`${localSelectedItems.includes(item.id) ? 'selected' : ''}`}>
              {item.name}
            </option>
          ))}
        </select>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
