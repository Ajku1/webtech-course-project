export class Chatroom {
    name: string;
    members: string[];
    description: string;
    messages: string[];    

    constructor(name: string, members: string[], description: string, messages: string[]) {
        this.name = name;
        this.members = members;
        this.description = description;
        this.messages = messages;
    }
}