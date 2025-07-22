import { createRoot } from 'react-dom/client';
import { config } from './config';
import { AppRoutes } from './pages/routes';

import '@eds-open/eds-ui/dist/styles.css';
import './assets/css/tailwind.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppRoutes />);

console.log(`App initialized successfully on ${config.ENV} environment.`);
