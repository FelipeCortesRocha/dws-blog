/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Filters from './index'

const categories = [{ id: 'c1', name: 'Category 1' }]
const authors = [{ id: 'a1', name: 'Author 1' }]

describe('Filters', () => {
  test('renders header and sort button (non-lateral)', async () => {
    const user = userEvent.setup()
    render(
      <Provider store={store}>
        <Filters categories={categories as any} authors={authors as any} />
      </Provider>
    )

    expect(screen.getByText('DWS Blog')).toBeInTheDocument()

    const sortBtn = screen.getByRole('button', { name: /Newest first/i })
    expect(sortBtn).toBeInTheDocument()

    await user.click(sortBtn)

    expect(screen.getByRole('button', { name: /Oldest first/i })).toBeInTheDocument()
  })

  test('renders lateral view with apply button', () => {
    render(
      <Provider store={store}>
        <Filters categories={categories as any} authors={authors as any} lateral={true} />
      </Provider>
    )

    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Author')).toBeInTheDocument()
    expect(screen.getByText('Apply filters')).toBeInTheDocument()
  })
})
