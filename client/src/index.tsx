import { createRoot } from 'react-dom/client';
import { Index } from './modules/index';

import './assets/css/tailwind.css';
import '@eds-open/eds-ui/dist/styles.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);
