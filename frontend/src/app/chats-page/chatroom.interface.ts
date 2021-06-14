import { User } from './user.interface';

export interface Chatroom {
    _id: string;
    name: string;
    members: User[];
    description: string;
    messages: string[];
}
