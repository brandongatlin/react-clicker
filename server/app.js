const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
    "mongodb+srv://brandon:ilovedat@1@msgapp-jcgn9.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
    console.log("connected to mLab");
});

const app = express();

app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000`)
);