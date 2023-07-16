import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import ErrorPage from 'pages/ErrorPage';
import LoadingPage from 'pages/LoadingPage';

const IssuesPage = React.lazy(() => import('pages/IssuesPage'));
const IssueDetailPage = React.lazy(() => import('pages/IssueDetailPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
