import { User } from '../users/user.interface';

export interface ChatsPage {
    name: String;
    members: User[];
    description: String;
    messages: String[];
}
