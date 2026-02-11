import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Header from './index'

describe('Header', () => {
  test('renders logo and search input', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )

    expect(screen.getByAltText('DWS logo')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
})
