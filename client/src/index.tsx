import { createRoot } from 'react-dom/client';
import { AppRoutes } from './pages/index';

import './assets/css/tailwind.css';
import '@eds-open/eds-ui/dist/styles.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppRoutes />);
