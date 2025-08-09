import { supabase } from "./config"


export class StorageService {
    client
    constructor() {
        this.client = supabase
    }

    async uploadAvatar(userId, file) {
        try {
            const extension = file.name.split('.').pop()
            const fileName = `${userId}/avatar.${extension}`
            const {data, error} = await this.client.storage.from("avatars").upload(fileName, file, {upsert: true})
            if(error) throw error
            return data
            
        } catch (error) {
            console.log("StorageService :: uploadAvatar :: error", error);
            return error
        }
    }

    async uploadPostImage(userId, postId, file) {
        try {
            const extension = file.name.split('.').pop()
            const fileName = `${userId}/${postId}.${extension}`
            const {data, error} = await this.client.storage.from('post-images').upload(fileName, file, {upsert: true})
            if(error) throw error
            return data
        
        } catch (error) {
            console.log("StorageService :: uploadPostImage :: error", error)
            throw error
        }
    }
}

const storageService = new StorageService()
export default storageService