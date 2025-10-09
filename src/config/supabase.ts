import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ewdljbiswetfcxspqvah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZGxqYmlzd2V0ZmN4c3BxdmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1NzAxOTIsImV4cCI6MjA3MzE0NjE5Mn0.IlMnmgmgPmmkTe0VL59oOizVkPEoSNC1qiM4oQclWbs";
export const supabase = createClient(supabaseUrl, supabaseKey);

