const React = require('react')

let mockPathname = '/'
let mockHash = ''

const useLocation = () => ({
  pathname: mockPathname,
  hash: mockHash,
  search: ''
})

const setMockLocation = (pathname, hash = '') => {
  mockPathname = pathname
  mockHash = hash
}

const Routes = ({ children }) => {
  const { pathname } = useLocation()
  const routes = React.Children.toArray(children)

  const matchedRoute = routes.find((child) => child.props?.path === pathname)
  if (matchedRoute) {
    return matchedRoute.props.element
  }

  return null
}

module.exports = {
  BrowserRouter: ({ children }) => children,
  MemoryRouter: ({ children }) => children,
  Routes,
  Route: () => null,
  Navigate: () => null,
  Link: ({ children, to, ...props }) =>
    React.createElement('a', { href: to, ...props }, children),
  useLocation,
  useNavigate: () => jest.fn(),
  setMockLocation
}
