import { Request, Response, Router } from "express";

import { adaptRoute } from "@main/adapters/express-route.adapter";

export default (router: Router): void => {
  router.get("/", (req: Request, res: Response) => res.send("Hello"));
};
