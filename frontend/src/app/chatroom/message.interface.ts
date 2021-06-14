export class Message {
    text: string;
    sender: String;
    sendDate?: Date;

    constructor(text: string, sender: String, sendDate: Date) {
        this.text = text;
        this.sender = sender;
        this.sendDate = sendDate;
    }
}