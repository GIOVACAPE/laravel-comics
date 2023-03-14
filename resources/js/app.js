
// incompleto!!!

import './bootstrap';

// Importiamo il nostro stile custom
import '~resources/scss/app.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Istruiamo Vite e Blade affinchè processino correttamente i nostri assets
import.meta.glob([
    '../img/**'
]);
