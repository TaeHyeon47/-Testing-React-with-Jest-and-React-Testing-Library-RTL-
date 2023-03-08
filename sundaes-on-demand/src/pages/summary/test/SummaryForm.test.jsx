import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

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

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async () => {
  const user = userEvent.setup();

  // popover starts out hidden

  // popover appears on mouseover of checkbox label

  // popover disappears when we mouse out
});
