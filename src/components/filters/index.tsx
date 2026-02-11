import { useSelector } from "react-redux";
import { setSelectedAuthor, setSelectedCategory, type RootState } from "../../store";
import type { Author, Category } from "../../types";
import Select from "../dropdown";
import { FiltersContainer } from "./styles";

interface FiltersProps {
  categories: Category[];
  authors: Author[];
}

function Filters({ categories, authors }: FiltersProps) {
  const selectedCategories = useSelector((state: RootState) => state.global.selectedCategories)
  const selectedAuthors = useSelector((state: RootState) => state.global.selectedAuthors)

  return (
    <FiltersContainer>
      <Select title="Category" items={categories} selectedItems={selectedCategories} setFunction={setSelectedCategory} />
      <Select title="Author" items={authors} selectedItems={selectedAuthors} setFunction={setSelectedAuthor} />
    </FiltersContainer>
  );
}

export default Filters;
