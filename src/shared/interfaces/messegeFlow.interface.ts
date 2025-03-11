export interface IMessageFlow {
    _id: string
    userId: string
    flowName: string
    templates: {
        textMessage: string
        "type": 'web_url' | 'postback'
        "url": string
        "title": string
        "payload": string
    }[]
}
