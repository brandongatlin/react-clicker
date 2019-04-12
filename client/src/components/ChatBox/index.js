import React from "react";
import { graphql, Query } from "react-apollo";
import { getMessagesQuery } from "../../queries/index";

const ChatBox = ({ props, msg }) => {

  return (
    <Query query={getMessagesQuery} >
      {({ loading, error, data }) => {
        if (loading) return <div>loading...</div>;

        if (error) return `Error!: ${error}`;

        const messages = data.allMessages;
        return (
          <div>
            {messages.map(msg => {
              return (
                <div key={msg.id}>
                  <p>{msg.handle}: {msg.text}</p>
                </div>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default graphql(getMessagesQuery)(ChatBox);