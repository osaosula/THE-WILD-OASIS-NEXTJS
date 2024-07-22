import { createClient } from "@supabase/supabase-js";

//const supabaseUrl = process.env.SUPABASE_URL;
//const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
//const supabase = createClient(supabaseUrl, supabaseKey);

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
