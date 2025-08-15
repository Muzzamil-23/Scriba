import { useSelector } from "react-redux"
import { supabase } from "./config"
import storageService from "./storage"


export class UserService {
    client
    constructor() {
        this.client = supabase
    }

    async completeProfile({displayName, location, bio, designation}, userId, avatar_url) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .upsert(
                    { id: userId, username: displayName, avatar_url: avatar_url, location: location, bio: bio, is_profile_completed: true, designation: designation }, {
                        onConflict: 'id'
                    }
                )
                .select()
            if(error) throw error
            return data       

        } catch (error) {
            console.log("UserService :: completeProfile :: error", error);
            throw error
        }
    }
}

const userService = new UserService()
export default userService