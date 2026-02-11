import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import PostCard from './index'
import type { Post } from '../../types'

const mockNavigate = vi.fn()

vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
}))

const post = {
  id: 'post-1',
  title: 'Hello World',
  content: 'This is content',
  createdAt: new Date().toISOString(),
  thumbnail_url: 'https://example.com/img.jpg',
  author: { id: 'a1', name: 'Jane' },
  authorId: 'a1',
  categories: [{ id: 'c1', name: 'Cat' }],
}

describe('PostCard', () => {
  test('renders post and navigates on click', () => {
    render(<PostCard post={post as Post} />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()
    expect(screen.getByText(/Jane/)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Hello World'))

    expect(mockNavigate).toHaveBeenCalledWith(`/post/${post.id}`)
  })
})
