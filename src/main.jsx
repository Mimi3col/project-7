import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout';
import BuildChar from './routes/BuildChar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            index={true}
            element={<App />}
          />
        </Route>
        <Route
          path="/BuildChar"
          element={<Layout />}>
          <Route
            index={true}
            element={<BuildChar />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
