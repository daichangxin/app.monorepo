import { createRoot } from 'react-dom/client';
import { AppRoutes } from './pages/index';

import './assets/css/tailwind.css';
import '@eds-open/eds-ui/dist/styles.css';
import { config } from './config';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppRoutes />);

console.log(`App initialized successfully on ${config.ENV} environment.`);