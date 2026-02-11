import { createSlice, configureStore } from "@reduxjs/toolkit";
import type { Post } from "./types";
import { dwsApi } from "./services/dws-service";

const globalSlice = createSlice({
	name: "global",
	initialState: {
		searchTerm: "",
		selectedCategories: [] as string[],
		selectedAuthors: [] as string[],
		selectedPost: {} as Post,
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
		setSelectedPost: (state, event) => {
			state.selectedPost = event.payload;
			return state;
		},
	},
});

export const { 
	setSearchTerm,
	setSelectedCategory,
	setSelectedAuthor,
	setSelectedPost,
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
