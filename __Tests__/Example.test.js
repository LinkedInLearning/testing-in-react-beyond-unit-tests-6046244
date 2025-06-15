import { getUser } from './api';

jest.mock('./api');

test('should render user info', async () => {
 getUser.mockResolvedValueOnce({ name: 'Ayodele' });
render(<UserProfile />);
  expect(await screen.findByText(/ayodele/i)).toBeInTheDocument();
});
