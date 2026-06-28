import { render, screen } from '@testing-library/react'
import PhotoBox from './PhotoBox'

test('renders profile information', () => {
  render(
    <PhotoBox
      name='John Doe'
      title='Frontend Developer'
      description='Short bio'
      avatar='avatar.png'
    />
  )

  expect(screen.getByRole('heading', { name: 'John Doe' })).toBeInTheDocument()
  expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
  expect(screen.getByText('Short bio')).toBeInTheDocument()
})

test('renders collapsed variant', () => {
  const { container } = render(
    <PhotoBox
      name='John Doe'
      title='Frontend Developer'
      description='Short bio'
      avatar='avatar.png'
      collapsed
    />
  )

  expect(container.firstChild).toHaveClass('photo-box--collapsed')
})
