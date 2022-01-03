import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat, Bubble, Time } from "react-native-gifted-chat";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "How are you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hi",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 3,
        text: "Hello Developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderTime = (props: any) => {
    return (
      <Time {...props} timeTextStyle={styles.timeTextStyle}>
        {props.children}
      </Time>
    );
  };

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: [styles.bubbleStyle, styles.bubbleStyleLeft],
          right: [styles.bubbleStyle, styles.bubbleStyleRight],
        }}
        textStyle={{
          right: styles.bubbleTextStyle,
        }}
        renderTime={renderTime}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderBubble={renderBubble}
      user={{
        _id: 1,
      }}
    />
  );
}

const styles = StyleSheet.create({
  bubbleStyle: {
    borderRadius: 6,
    elevation: 2,
  },
  bubbleStyleLeft: {
    backgroundColor: "#fff8e3",
  },
  bubbleStyleRight: {
    backgroundColor: "#fff",
    color: "black",
  },
  bubbleTextStyle: {
    color: "black",
  },
  timeTextStyle: {
    color: "black",
  },
});
