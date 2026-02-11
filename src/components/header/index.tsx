import { Search } from 'lucide-react'
import logo from '../../assets/dws-logo.png'
import { HeaderContainer, SearchInput } from './styles'
import { useState } from 'react'
import { setSearchTerm, store } from '../../store'

function Header() {
  const [searchInputOpen, setSearchInputOpen] = useState(false)

  return (
    <HeaderContainer>
      <img src={logo} alt="DWS logo" style={{width: 'auto', height: '30px'}}/>

      <SearchInput 
        name="seachInput" 
        type="text" 
        placeholder="Search" 
        onKeyUp={(event) => store.dispatch(setSearchTerm(event.currentTarget.value))}
        className={searchInputOpen ? 'open' : ''}
      />

      <button onClick={() => setSearchInputOpen(!searchInputOpen)}><Search /></button>
    </HeaderContainer>
  )
}

export default Header