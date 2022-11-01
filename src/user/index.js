import { storage } from "../lib/storage"

export const saveUserName = (userName) => {
    storage.save({key: 'userName', value: userName})
}
export const getUserName = (userName) => {
    return storage.get({key: 'userName'})
}