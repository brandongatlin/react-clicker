import { gql } from "apollo-boost";

const addMsgMutation = gql `
  mutation($handle: String!, $text: String!) {
    addPost(handle: $handle, text: $text) {
      handle
      text
    }
  }
`;

const getMessagesQuery = gql `
  {
    addMsg {
      hanle
      text
    }
  }
`;



export { addMsgMutation, getMessagesQuery };