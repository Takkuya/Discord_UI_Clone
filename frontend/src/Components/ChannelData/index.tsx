import React, {useRef, useEffect} from "react";
import ChannelMessage, {Mention} from "../ChannelMessage";

import { 
  Container, 
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  /*A página abre com o scroll na última mensagem, e não na primeira*/
  useEffect(() => {
    const div = messagesRef.current;

    if (div ) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from (Array(15).keys()).map((n) => (
          <ChannelMessage 
          author="Takuya"
          date='11/10/2020'
          content='Sei lá parceiro'
          />
        ))}

        <ChannelMessage 
          author="Takuya"
          date='11/10/2020'
          content={
            <>
              <Mention>@Gabriel Jesus</Mention>, <Mention>@Batimã</Mention>, bora codar?
            </>
          }
            hasMentions
            isBot
          />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
