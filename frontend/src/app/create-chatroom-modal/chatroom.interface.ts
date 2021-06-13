import { User } from './user.interface';

export interface Chatroom {
    name: string;
    members: User[];
    description: string;
    messages: string[];
}
