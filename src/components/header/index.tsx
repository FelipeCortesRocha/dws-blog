import { useState } from 'react';
import { ArrowLeft, Search, X } from 'lucide-react';
import logo from '../../assets/dws-logo.png';
import { HeaderContainer, SearchInput, SearchInputContainer, SearchSuggestions } from './styles';
import { setSearchTerm, store, type RootState } from '../../store';
import { useSelector } from 'react-redux';
import type { Category } from '../../types';
import { breakpoints } from '../../styles';

function Header() {
  const { categories } = useSelector((state: RootState) => state.global);

  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchButtonClick = () => {
    if (!searchInputOpen && window.innerWidth < parseInt(breakpoints.tablet)) {
      setSearchInputOpen(true);
      return;
    }

    store.dispatch(setSearchTerm(searchInputValue));
    setSearchInputOpen(false);
    setSearchInputValue('');
  };

  return (
    <>
      <HeaderContainer className={`${searchInputOpen ? 'searchOpen' : ''}`}>
        {!searchInputOpen && <img src={logo} alt="DWS logo" style={{ width: 'auto', height: '30px' }} />}

        <SearchInputContainer>
          <SearchInput
            name="seachInput"
            type="text"
            placeholder="Search"
            value={searchInputValue}
            onChange={event => setSearchInputValue(event.currentTarget.value)}
            className={searchInputOpen ? 'open' : ''}
          />

          {searchInputOpen && (
            <button onClick={() => setSearchInputOpen(false)} className="back-button">
              <ArrowLeft />
            </button>
          )}
          <button onClick={handleSearchButtonClick}>{searchInputOpen ? <X /> : <Search />}</button>
        </SearchInputContainer>
      </HeaderContainer>

      {searchInputOpen && (
        <SearchSuggestions>
          {categories.map((category: Category) => (
            <p key={category.id} className="search-suggestion" onClick={() => setSearchInputValue(category.name)}>
              {category.name}
            </p>
          ))}
        </SearchSuggestions>
      )}
    </>
  );
}

export default Header;
