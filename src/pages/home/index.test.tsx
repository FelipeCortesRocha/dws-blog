/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Home from './index'
import { MemoryRouter } from 'react-router'

const post = {
  id: 'p1',
  title: 'Home Post',
  content: 'Content',
  createdAt: new Date().toISOString(),
  thumbnail_url: '',
  author: { id: 'a1', name: 'Author' },
  authorId: 'a1',
  categories: [{ id: 'c1', name: 'Cat' }],
}

vi.mock('../../services/dws-service', () => {
  return {
    dwsApi: {
      reducerPath: 'dwsApi',
      reducer: (state: unknown = {}) => state,
      middleware: () => () => (next: any) => (action: any) => next(action),
    },
    useGetPostsQuery: () => ({ data: [post], isLoading: false, error: undefined }),
  }
})

describe('Home page', () => {
  test('renders posts from service', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Home Post')).toBeInTheDocument()
  })
})
