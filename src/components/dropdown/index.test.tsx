import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dropdown from './index'

const items = [
  { id: '1', name: 'One' },
  { id: '2', name: 'Two' },
]

describe('Dropdown', () => {
  test('toggles and shows options', async () => {
    const user = userEvent.setup()
    const actionCreator = (payload: unknown) => ({ type: 'TEST_ACTION', payload })
    render(<Dropdown title="Test" items={items} selectedItems={[]} setFunction={actionCreator} lateral={false} />)

    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()

    await user.click(btn)

    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
  })
})
