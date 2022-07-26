import { fireEvent, render, screen } from '@testing-library/react';
import App from 'App';

test('renders without crashing', async () => {
  render(<App />);
  const title = await screen.findByText(/Welcome/i);
  expect(title).toBeInTheDocument();
});

test('renders container with query selector', () => {
  render(<App />);
  const gifLink = screen.getByRole('main');
  expect(gifLink).toBeInTheDocument();
});

test('search form could be used', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox');
  fireEvent.change(input, { target: {value: 'Matrix'} })
  const button = await screen.findByRole('button')
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible();
});