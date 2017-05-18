import {ChatUser} from './chat-user';
export class ChatMessage{
  ID: string;
  user: ChatUser;
  messageBody: string;
  timeSent = new Date();
  showDetails = false;
}
