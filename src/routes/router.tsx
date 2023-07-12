import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Issue from 'pages/Issues';
import IssueDetail from 'pages/IssueDetail';
import ErrorPage from 'pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
