import { useSelector } from 'react-redux';
import { setSelectedAuthor, setSelectedCategory, setSort, store, type RootState } from '../../store';
import type { Author, Category } from '../../types';
import Select from '../dropdown';
import { FiltersContainer } from './styles';
import Button from '../button';
import { ArrowUpDown, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

interface FiltersProps {
  categories: Category[];
  authors: Author[];
  lateral?: boolean;
}

function Filters({ categories, authors, lateral = false }: FiltersProps) {
  const [forceFilterUpdate, setForceFilterUpdate] = useState(false);
  const { sort, selectedCategories, selectedAuthors } = useSelector((state: RootState) => state.global);

  return (
    <FiltersContainer className={`${lateral ? 'lateral' : ''}`}>
      {!lateral && <h2>DWS Blog</h2>}

      <div className="filters">
        {lateral && (
          <div className="filter-title">
            <SlidersHorizontal />
            <h3>Filters</h3>
          </div>
        )}
        <Select shouldUpdate={forceFilterUpdate} title="Category" items={categories} selectedItems={selectedCategories} setFunction={setSelectedCategory} lateral={lateral} />
        <Select shouldUpdate={forceFilterUpdate} title="Author" items={authors} selectedItems={selectedAuthors} setFunction={setSelectedAuthor} lateral={lateral} />
        {lateral && <Button onClick={() => setForceFilterUpdate(!forceFilterUpdate)}>Apply filters</Button>}
      </div>

      {!lateral && (
        <Button
          type="tertiary"
          onClick={() => {
            store.dispatch(setSort(sort === 'Oldest' ? 'Newest' : 'Oldest'));
          }}
          IconRight={ArrowUpDown}
        >
          {sort} first
        </Button>
      )}
    </FiltersContainer>
  );
}

export default Filters;
