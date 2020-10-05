import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: "Teste Jose",
    email: "teste@gmail.com",
    password: "123456",
    techs: [
      "Node.js",
      "ReactJS",
      "ReactNative",
      { title: "Javascript", experience: 100 },
    ],
  });

  return res.json({ msg: "Hello World" });
}
