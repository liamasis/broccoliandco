import { render, screen, waitFor } from '@testing-library/react';
import { Form } from './form';
import user from '@utesting-library/user-event';

describe('Form', async () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<Form />);
    });

    it('onSubmit will be passed when all name > 3 char and emails match '), () => {
    
    user.type(getFullName(), 'Liam');
    user.type(getEmail(), 'liam@hotmail.com');
    user.type(getCEmail(), 'liam@hotmail.com');

    user.click(screen.getByRole('button', {name: /Join our Mailing List/i}));

    waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
    })
    }
});

function getFullName() {
    const fullname = screen.getByPlaceholderText(/full name/i);
    return fullname;
}
function getEmail() {
    const email = container.querySelector('#email');
    return email;
}
function getCEmail() {
    const confirmemail = screen.getByPlaceholderText(/confirm email address/i);
    return confirmemail;
}