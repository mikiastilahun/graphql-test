import { importSchema } from "graphql-import";
import { prisma } from "../../prisma/generated/prisma-client";
import user from "./user/user.resolvers";

const resolvers = { ...user };

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

export default {
  typeDefs,
  resolvers,
  context: {
    prisma
  }
};
