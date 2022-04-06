import express from 'express';
import { engine } from 'express-handlebars';

import constants from './constants';
import { addRoutes } from './router';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/templates');
addRoutes(app);

const message = `App is running on port ${constants.PORT}`;

// eslint-disable-next-line no-console
app.listen(constants.PORT, () => console.log(message));
