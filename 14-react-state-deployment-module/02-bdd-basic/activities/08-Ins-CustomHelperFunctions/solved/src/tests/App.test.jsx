import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Our custom render function renders the App component and
// returns an object that contains all the methods needed to 
// select the elements used in our tests.

// This helps us to DRY up our code by removing duplicate calls to screen.getByRole() and screen.getByText()
const renderApp = () => {
    render(<App />);

    return {
        getIncrementBtn: () => screen.getByRole('button', { name: 'increment counter' }),
        getDecrementBtn: () => screen.getByRole('button', { name: 'decrement counter' }),
        getErrorHeading: () => screen.getByRole('heading', { level: 2 }),
        getCountAtZero: () => screen.getByText('0'),
        getCountAtOne: () => screen.getByText('1'),
    };
}

// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
    render(<App />);
});

// Test 2: Write a test that checks if the button within the `App` component renders properly.
it('App Component Renders a Button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'increment counter' });

    expect(button).toBeDefined();
});

// Test 3: Write a test which checks if the counter starts at 0.
it('Counter Starts At 0', () => {
    render(<App />);
    const count = screen.getByText('0');

    expect(count).toBeDefined();
});

// Test 4: Write a test which checks if the increment button increases the count.
it('Clicking Increment Button Increases Counter Display', async () => {
    render(<App />);

    await userEvent.click(
        screen.getByRole('button', { name: 'increment counter' })
    );

    const count = screen.getByText('1');

    expect(count).toBeDefined();
});

// Test 5: Write a test which checks to see if the counter display renders properly.
it("App Component Renders the Counter Display", () => {
    render(<App />);
    const count = screen.getByText('0');

    expect(count).toBeDefined();
});

// Test 6: Write a test for a decrement button
it('App Component Renders a Decrement Button', async () => {
    render(<App />);

    await userEvent.click(
        screen.getByRole('button', { name: 'decrement counter' })
    );

    const count = screen.getByText('0');

    expect(count).toBeDefined();
});

// Test 7: Write a test which will not allow the counter to go below 0 and display an error message
it('Count is Unable to go Below Zero and Throws Error', async () => {
    render(<App />);

    await userEvent.click(
        screen.getByRole('button', { name: 'decrement counter' })
    );

    const errorHeading = screen.getByRole('heading', { level: 2 });

    expect(errorHeading.textContent).toBe('The counter can not go below zero');
});

// Test 8: Clear the error message on Increment
it('Decrement Error Message Clears When Count Increment Higher than 0', async () => {
    render(<App />);

    await userEvent.click(
        screen.getByRole('button', { name: 'increment counter' })
    );

    const errorHeading = screen.getByRole('heading', { level: 2 });

    expect(errorHeading.textContent).toBe('');
});
