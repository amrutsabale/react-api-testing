import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter as Router } from 'react-router-dom'
import Posts from './Posts';

const server = setupServer(rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
        ctx.json([
            {
                "userId": 1,
                "id": 1,
                "title": "Test1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": " Test2 qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }])
    )
}))

beforeAll(() => {
    server.listen();
})

beforeEach(() => {
    server.resetHandlers();
})

afterAll(() => {
    server.close();
})

describe('api tests', () => {
    it('should fetch all posts correctly', async () => {

        render(<Router><Posts /></Router>);
        const loadPostsBtn = screen.getByText("Load Posts")
        fireEvent.click(loadPostsBtn);
        await waitFor(() => {
            screen.getByText("Test1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        });
    });
})
