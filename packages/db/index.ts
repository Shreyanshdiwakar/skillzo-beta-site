import { PrismaClient } from "./generated/prisma"
// import { withAccelerate } from '@prisma/extension-accelerate'


const prisma =  new PrismaClient()// commented temporarily due to some errors .$extends(withAccelerate())


export default prisma;
