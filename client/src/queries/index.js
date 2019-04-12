import { gql } from "apollo-boost";

const addMsgMutation = gql `
  mutation($handle: String!, $text: String!) {
    addMsg(handle: $handle, text: $text) {
      handle
      text
    }
  }
`;

const getMessagesQuery = gql `
  {
    allMessages {
      handle
      text
      id
    }
  }
`;



export { addMsgMutation, getMessagesQuery };