
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pbhobitlveebofnvtjna.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiaG9iaXRsdmVlYm9mbnZ0am5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Nzk5NzgsImV4cCI6MjA2MDQ1NTk3OH0.o-RxOk21u6GQaK1THk2Tq1Frh7Vp3JvznHk9fYbgHRI";

export const supabase = createClient(supabaseUrl!, supabaseKey!);