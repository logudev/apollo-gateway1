### Simple Apollo Gateway routing to two sample subgraph servers for merchants and transactions.


Sample Query:
query {
  merchants {
    id
    email
    transactions {
      amount
      date
      id
    }
  }
}