
export interface IMessage {
    id:string,
    value:string,
    response:Array<string>
}

export interface IMessages {
    [key: string]: IMessage
}
