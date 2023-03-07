import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

// My Code
// test('agreement checkbox testing', async () => {
//   render(<SummaryForm />);

//   const checkbox = screen.getByRole('checkbox', {
//     name: 'I agree to Terms and Conditions',
//   });
//   const Button = screen.getByRole('button', { name: 'Confirm order' });

//   expect(checkbox).not.toBeChecked();

//   fireEvent.click(checkbox);

//   expect(Button).toBeEnabled();

//   fireEvent.click(checkbox);

//   expect(Button).toBeDisabled();
// });

test('Initial conditions', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm oreder/i });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  const confirmButton = screen.getByRole('button', { name: /confirm oreder/i });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
