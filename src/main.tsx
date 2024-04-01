import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Order seems to matter. If Mantine is imported after tailwind, the tailwind class passed with className is not applied.
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './i18.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider>
    <ToastContainer />
    <App />
  </MantineProvider>,
);
