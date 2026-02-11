/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import PostPage from './index'

const mockNavigate = vi.fn()

vi.mock('react-router', () => ({
  useLocation: () => ({ pathname: '/post/p1' }),
  useNavigate: () => mockNavigate,
}))

const post = {
  id: 'p1',
  title: 'Post Title',
  content: 'Post content',
  createdAt: new Date().toISOString(),
  thumbnail_url: '',
  author: { id: 'a1', name: 'Author', profilePicture: '' },
  authorId: 'a1',
  categories: [{ id: 'c1', name: 'Cat' }],
}

vi.mock('../../services/dws-service', () => {
  return {
    dwsApi: {
      reducerPath: 'dwsApi',
      reducer: (state: any = {}) => state,
      middleware: () => () => (next: any) => (action: any) => next(action),
    },
    useGetPostsQuery: () => ({ data: [post], isLoading: false, error: undefined }),
  }
})

describe('Post page', () => {
  test('renders selected post details and back button', () => {
    render(
      <Provider store={store}>
        <PostPage />
      </Provider>
    )

    expect(screen.getByRole('heading', { level: 1, name: 'Post Title' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Back/ })).toBeInTheDocument()
  })
})
