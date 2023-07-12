import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { IssueProvider } from 'context/IssueContext';
import router from 'routes/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <IssueProvider>
    <RouterProvider router={router} />
  </IssueProvider>
);
