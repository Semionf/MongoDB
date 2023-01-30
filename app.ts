import { bootstrap } from "./bootstrap";
import { getCoursesAsync } from "./services/student.service";
import express, { Request, Response } from "express";
const app = express();

const start = async () => {
  app.get("/", async (req: Request, res: Response) => {
    let courses = await getCoursesAsync();
    res.json(courses);
  });

  app.listen(3000, () => {
    console.log("Server listening on 3000");
  });
};

bootstrap(start);
