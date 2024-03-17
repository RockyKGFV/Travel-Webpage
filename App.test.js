import { render, screen } from '@testing-library/react'; // Importing testing utilities
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // Finding an element containing 'learn react' text 
  expect(linkElement).toBeInTheDocument();
});
