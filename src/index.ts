import restana from 'restana';

import constants from './constants';

const app = restana();

app.get('/', (req, res) => res.send({ detail: 'Hello World!' }));

const message = `App is running on port ${constants.PORT}`;

// eslint-disable-next-line no-console
app.start(constants.PORT).then(() => console.log(message));
