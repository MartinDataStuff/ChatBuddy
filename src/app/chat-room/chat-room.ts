import {ChatUser} from "./chat-user";
import {ChatMessage} from "./chat-message";
export class ChatRoom{
ID: string;
title: string;
isPrivate: boolean;
isAnonymous: boolean;
usersInRoom: ChatUser[];
messagesInRoom: ChatMessage[];
}
