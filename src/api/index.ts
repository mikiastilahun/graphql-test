import { importSchema } from "graphql-import";
import { prisma } from "../../prisma/generated/prisma-client";
import user from "./user/user.resolvers";
import { makeExecutableSchema } from "graphql-tools";

// const typeDefs = importSchema("schema.gql");
// const resolvers = { ...user };

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: { ...user }
});

export default {
  ...schema,
  context: {
    prisma
  }
};
