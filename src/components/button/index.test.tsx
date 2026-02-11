import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './index'

describe('Button', () => {
  test('renders children and handles click', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const btn = screen.getByText('Click me')
    expect(btn).toBeInTheDocument()
    await user.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders icons when provided', () => {
    const Left = () => <span data-testid="left">L</span>
    const Right = () => <span data-testid="right">R</span>
    render(
      <Button IconLeft={Left} IconRight={Right}>
        Kids
      </Button>
    )
    expect(screen.getByTestId('left')).toBeInTheDocument()
    expect(screen.getByTestId('right')).toBeInTheDocument()
  })
})
