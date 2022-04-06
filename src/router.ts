import {
  Service, Protocol, Request, Response,
} from 'restana';

type Req = Request<Protocol>;
type Res = Response<Protocol>;

export function addRoutes(app: Service<Protocol.HTTP>): void {
  app.get('/', (req: Req, res: Res) => res.send({ detail: 'Hello World!' }));
}
