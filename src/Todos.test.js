import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'
import Todos from './Todos';

//jest api mock Reference: https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
jest.mock('axios');

describe('api tests', () => {
    it('should fetch all todos correctly', async () => {
        axios.get.mockResolvedValue({
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Test1 delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "Test2 quis ut nam facilis et officia qui",
                    "completed": true
                }
            ]
        });

        render(<Router><Todos /></Router>);
        const loadTodosBtn = screen.getByText("Load Todos")
        fireEvent.click(loadTodosBtn);
        await waitFor(() => {
            screen.getByText("Test1 delectus aut autem");
        });
    });
})
