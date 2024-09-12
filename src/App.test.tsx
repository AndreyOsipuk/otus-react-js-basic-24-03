import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/click/i);
  expect(linkElement).toBeInTheDocument();
});

it('test count', async () => {
  render(<App />);

  const button = screen.getByTestId('button')

  button.click()
  const el = await screen.findByText("2");
  expect(el).toBeInTheDocument();
});
