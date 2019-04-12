import React, { useState } from "react";
import { graphql, Mutation, compose } from "react-apollo";
import { addMsgMutation, getMessagesQuery } from "../../queries/index";

import ChatBox from '../ChatBox';


const Form = (props) => {
    const [handle, setHandle] = useState(null);
    const [text, setText] = useState(null);

    return ( 
      <Mutation mutation={addMsgMutation}>
              {addMsg => (

            <>
          <form onSubmit={async e => {
            e.preventDefault();
            await addMsg({
              variables: {handle, text},
              refetchQueries: [{query: getMessagesQuery}]
            });
            setText(null);
          }}>
            <label>Handle
              <input type = "text" onChange={(e)=> {
                setHandle(e.target.value)
              }}/> 
            </label>
            <br/>
            <label>Message
              <input type = "text" onChange={(e)=> {
                e.preventDefault();
                setText(e.target.value);
              }}/> 
            </label>
            <br/>
            <button type="submit">Submit</button>
            <hr/>
          </form>
          <ChatBox />
          </>
              )}
      </Mutation>

    );
}

export default compose(
  graphql(addMsgMutation, {
    name: "addMsgMutation"
  }),
  graphql(getMessagesQuery, {
    name: "getMessagesQuery"
  })
)(Form);