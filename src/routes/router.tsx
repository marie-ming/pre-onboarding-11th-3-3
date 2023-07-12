import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Issue from 'pages/Issues';
import IssueDetail from 'pages/IssueDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Issue />,
      },
      {
        path: ':id',
        element: <IssueDetail />,
      },
    ],
  },
]);

export default router;
