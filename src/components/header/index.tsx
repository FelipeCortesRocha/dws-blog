import { useEffect, useState } from "react";
import { ArrowLeft, Search, X } from "lucide-react";
import logo from "../../assets/dws-logo.png";
import { HeaderContainer, SearchInput, SearchSuggestions } from "./styles";
import { setSearchTerm, store, type RootState } from "../../store";
import { useSelector } from "react-redux";
import type { Category } from "../../types";

function Header() {
  const { categories } = useSelector((state: RootState) => state.global);

  const [searchInputOpen, setSearchInputOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchButtonClick = () => {
    if (!searchInputOpen) {
      setSearchInputOpen(true);
      return;
    }

    setSearchInputOpen(false);
    setSearchInputValue("");
  };

  useEffect(() => {
    store.dispatch(setSearchTerm(searchInputValue));
  }, [searchInputValue]);

  return (
    <>
      <HeaderContainer className={`${searchInputOpen ? "searchOpen" : ""}`}>
        {!searchInputOpen && (
          <img
            src={logo}
            alt="DWS logo"
            style={{ width: "auto", height: "30px" }}
          />
        )}

        <SearchInput
          name="seachInput"
          type="text"
          value={searchInputValue}
          onChange={(event) => setSearchInputValue(event.currentTarget.value)}
          className={searchInputOpen ? "open" : ""}
        />

        {searchInputOpen && (
          <button onClick={() => setSearchInputOpen(false)}>
            <ArrowLeft />
          </button>
        )}
        <button onClick={handleSearchButtonClick}>
          {searchInputOpen ? <X /> : <Search />}
        </button>
      </HeaderContainer>

      {searchInputOpen && (
        <SearchSuggestions>
          {categories.map((category: Category) => (
            <p
              key={category.id}
              className="search-suggestion"
              onClick={() => setSearchInputValue(category.name)}
            >
              {category.name}
            </p>
          ))}
        </SearchSuggestions>
      )}
    </>
  );
}

export default Header;
