import { User } from './user.interface';

export interface Chatroom {
    id: string;
    name: string;
    members: User[];
    description: string;
    messages: string[];
}
