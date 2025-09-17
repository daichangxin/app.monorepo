import '@eds-open/eds-ui/dist/styles.css';
import './assets/css/tailwind.css';

import { createRoot } from 'react-dom/client';

import { config } from './config';
import { AppRoutes } from './pages/routes';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppRoutes />);

console.log(`App initialized successfully on ${config.ENV} environment.`);
