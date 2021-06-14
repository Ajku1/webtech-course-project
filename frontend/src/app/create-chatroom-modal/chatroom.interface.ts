import { User } from './user.interface';
import { Message } from './message.interface';

export interface Chatroom {
    id: string;
    name: string;
    members: User[];
    description: string;
    messages: Message[];
}
