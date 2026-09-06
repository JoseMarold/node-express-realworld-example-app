import { Request, Response } from 'express';

export const insecureEval = (req: Request, res: Response) => {
  const input = req.body.expression;

  const result = eval(input);

  res.json({ result });
};