/* eslint-disable @typescript-eslint/no-explicit-any */
import { Express } from 'express';

export function addRoutes(app: Express): void {
  app.get('/', (req: any, res: any) => res.send('More Commits is running!'));
  app.get('/main', (req: any, res: any) => {
    res.render('main', { layout: false });
  });
}
