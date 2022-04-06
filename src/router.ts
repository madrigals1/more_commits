/* eslint-disable @typescript-eslint/no-explicit-any */
import { Express } from 'express';

export function addRoutes(app: Express): void {
  app.get('/', (req: any, res: any) => {
    res.render('commits', { layout: false });
  });
}
