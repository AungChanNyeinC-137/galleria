import { NextFunction, Request, Response } from "express";
import { validateRegistrationData } from "../utils/auth.helper";
import { PrismaClient } from "@prisma/client";

//Register a new User
export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRegistrationData(req.body, "user");
  const { name, email } = req.body;
  const prismaz = new PrismaClient()
  const existingUser = await prismaz.users.findUnique({
    where: { email },
  });
};
