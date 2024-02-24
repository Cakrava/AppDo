import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Chatx = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const currentUser = 'User1'; // Set a user identifier

  const handleSend = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTimestamp = `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}`;

    const message = {
      id: messages.length.toString(),
      text: newMessage,
      user: currentUser,
      timestamp: formattedTimestamp,
      delivered: true, // Assume the message is delivered for simplicity
    };

    // Check if the user sent "halo" and add a bot response
    if (newMessage.toLowerCase() === 'joyo anjing') {
      const botResponse = {
        id: (messages.length + 1).toString(),
        text: 'emang iya kek anjing',
        user: 'ChatBot',
        timestamp: getCurrentTimestamp(),
        delivered: true,
      };
      setMessages([...messages, message, botResponse]);
    } else {
      setMessages([...messages, message]);
    }

    setNewMessage('');
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}`;
  };

  const renderMessage = ({item}) => (
    <View
      style={
        item.user === currentUser
          ? styles.myMessageContainer
          : styles.otherMessageContainer
      }>
      <Text style={styles.messageText}>{item.text}</Text>
      <View style={styles.messageInfoContainer}>
        <Text style={styles.timestampText}>{item.timestamp}</Text>
        {item.user === currentUser && item.delivered && (
          <Text style={styles.checkmarkText}>✓✓</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9999FF',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#FF66FF',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#CCCCFF',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
  messageInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  timestampText: {
    fontSize: 12,
    color: 'white',
  },
  checkmarkText: {
    fontSize: 12,
    color: 'white',
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Chatx;
