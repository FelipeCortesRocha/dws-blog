import { useSelector } from "react-redux";
import { setSelectedAuthor, setSelectedCategory, setSort, store, type RootState } from "../../store";
import type { Author, Category } from "../../types";
import Select from "../dropdown";
import { FiltersContainer } from "./styles";
import Button from "../button";
import { ArrowUpDown } from "lucide-react";

interface FiltersProps {
  categories: Category[];
  authors: Author[];
}

function Filters({ categories, authors }: FiltersProps) {
  const { sort, selectedCategories, selectedAuthors } = useSelector((state: RootState) => state.global)

  return (
    <FiltersContainer>
      <div className="filters">
        <Select title="Category" items={categories} selectedItems={selectedCategories} setFunction={setSelectedCategory} />
        <Select title="Author" items={authors} selectedItems={selectedAuthors} setFunction={setSelectedAuthor} />
      </div>

      <Button type="tertiary" onClick={() => {store.dispatch(setSort(sort === 'Oldest' ? 'Newest' : 'Oldest'))}} IconRight={ArrowUpDown}>{sort} first</Button>
    </FiltersContainer>
  );
}

export default Filters;
