import conf from "@/conf/conf";
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(conf.supabaseUrl, conf.supabaseAnonKey)