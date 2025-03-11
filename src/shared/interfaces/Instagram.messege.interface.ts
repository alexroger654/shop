export interface IInstagramMessage {
    _id: string
    userId: string
    userName: string
    instagramId: string
    senderId: string
    senderName: string
    createdAt: string
    updatedAt: string
    messages: {
        messageId: string
        message: string,
        isEcho: boolean
    }[]

}
