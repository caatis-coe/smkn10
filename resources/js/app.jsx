import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'SMKN 10 Bandung';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`${import.meta.env.VITE_APP_ENV != 'maintenance' ? `./Pages/${name}.jsx` : './Pages/Maintenance.jsx'}`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
