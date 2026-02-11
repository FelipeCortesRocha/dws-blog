import { createSlice, configureStore } from "@reduxjs/toolkit";
import { dwsApi } from "./services/dws-service";
import type { Category } from "./types";

const globalSlice = createSlice({
	name: "global",
	initialState: {
		searchTerm: "",
		sort: "Newest",
		categories: [] as Category[],
		selectedCategories: [] as string[],
		selectedAuthors: [] as string[],
	},
	reducers: {
		setSearchTerm: (state, event) => {
			state.searchTerm = `${event.payload}`;
			return state;
		},
		setSelectedCategory: (state, event) => {
			state.selectedCategories = event.payload;
			return state;
		},
		removeSelectedCategory: (state, event) => {
			const categoryIndex = state.selectedCategories.indexOf(event.payload);
			if (categoryIndex > -1) {
				state.selectedCategories.splice(categoryIndex, 1);
			}
			return state;
		},
		setSelectedAuthor: (state, event) => {
			state.selectedAuthors = event.payload;
			return state;
		},
		setCategories: (state, event) => {
			state.categories = event.payload;
			return state;
		},
		setSort: (state, event) => {
			state.sort = event.payload;
			return state;
		}
	},
});

export const { 
	setSearchTerm,
	setSelectedCategory,
	setSelectedAuthor,
	setCategories,
	setSort,
} = globalSlice.actions;

export const store = configureStore({
	reducer: {
		global: globalSlice.reducer,
		[dwsApi.reducerPath]: dwsApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dwsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
