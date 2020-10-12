import React from "react";

import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryICon} from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryICon />
      </Category>

      <ChannelButton channelName="chat-livre"/>
      <ChannelButton channelName="programação"/>
      <ChannelButton channelName="cursed-crashers"/>
      <ChannelButton channelName="genshin-impact"/>
      <ChannelButton channelName="amongas"/>
    </Container>
  );
};

export default ChannelList;
