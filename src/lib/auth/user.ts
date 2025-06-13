import bcrypt from "bcryptjs";
import prisma from "../prisma";

export async function createUser(name: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function validatePassword(user: any, password: string) {
  return bcrypt.compare(password, user.password);
}
