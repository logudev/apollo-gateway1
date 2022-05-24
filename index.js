import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

// Deprecated: using serviceList
// const gateway = new ApolloGateway({
//   serviceList: [
//     { name: "merchants", url: "http://localhost:5001/" },
//     { name: "transactions", url: "http://localhost:5002" },
//   ],
// });

// Latest: using IntrospectAndCompose

const merchantUrl = "https://merchants-subgraph.herokuapp.com/graphql";
const transactionUrl = "https://transactions-subgraph.herokuapp.com/graphql";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "merchants", url: merchantUrl },
      { name: "transactions", url: transactionUrl },
    ],
  }),
});

const server = new ApolloServer({ gateway, subscriptions: false });

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) =>
    console.log(`Approach 1 - Gateway Server running at ${url}`)
  )
  .catch((err) => console.error(err));
