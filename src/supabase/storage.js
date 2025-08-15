import { supabase } from "./config"


export class StorageService {
    client
    constructor() {
        this.client = supabase
    }

    async uploadAvatar(userId, file, name) {
        try {
            const extension = name.split('.').pop()
            const fileName = `${userId}/avatar.${extension}`
            const { data, error } = await this.client.storage.from("avatars").upload(fileName, file, { cacheControl: '3600', upsert: false })
            if (error) throw error
            const { data: publicData } = this.client
                .storage
                .from("avatars")
                .getPublicUrl(fileName);
            return publicData.publicUrl;

        } catch (error) {
            console.log("StorageService :: uploadAvatar :: error", error);
            throw error
        }
    }

    // getAvatar(userId) {
    //     const fileName = `${userId}/avatar.${'png' || 'jpeg' || 'jpg' || 'webp'}`
    //     const { data, error } = this.client.storage.from("avatars").getPublicUrl(fileName)
    //     if (error) console.log("StorageService :: getAvatar :: error", error);
    //     return data
    // }

    async uploadPostImage(userId, postId, file) {
        try {
            const extension = file.name.split('.').pop()
            const fileName = `${userId}/${postId}.${extension}`
            const { data, error } = await this.client.storage.from('post-images').upload(fileName, file, { upsert: true })
            if (error) throw error
            return data

        } catch (error) {
            console.log("StorageService :: uploadPostImage :: error", error)
            throw error
        }
    }
}

const storageService = new StorageService()
export default storageService