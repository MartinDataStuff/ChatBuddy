import {ChatUser} from "./chat-user";
export class ChatRoom{
ID: string;
title: string;
isPrivate: boolean;
isAnonymous: boolean;
usersInRoom: ChatUser[];
}
