import {IMessage, IMessages} from './interfaces/message';

export const createMessage = (message:string):IMessage => {
    return {
        id: generateId(),
        value: message,
        response: [],
    }
}

export const generateId = ():string => {
    return window.btoa(Math.random().toString() + Date.now().toString());
}
