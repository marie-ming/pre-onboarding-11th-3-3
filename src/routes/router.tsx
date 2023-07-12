import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import IssuesPage from 'pages/IssuesPage';
import IssueDetailPage from 'pages/IssueDetailPage';
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
        element: <IssuesPage />,
      },
      {
        path: ':id',
        element: <IssueDetailPage />,
      },
    ],
  },
]);

export default router;
