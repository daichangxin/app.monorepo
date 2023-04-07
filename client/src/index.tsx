import { createRoot } from 'react-dom/client';
import { Index } from './modules/index';

import './assets/css/global.css';
import './assets/css/reset.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);
