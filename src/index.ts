import restana from 'restana';

import constants from './constants';
import { addRoutes } from './router';

const app = restana();

addRoutes(app);

const message = `App is running on port ${constants.PORT}`;

// eslint-disable-next-line no-console
app.start(constants.PORT).then(() => console.log(message));
