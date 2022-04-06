import restana from 'restana';

const app = restana();

app.get('/', (req, res) => res.send({ detail: 'Hello World!' }));

app.start(3000).then(() => console.log('App is running on port 3000'));
