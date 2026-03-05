import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fipoeezmmdwtejwirrhp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcG9lZXptbWR3dGVqd2lycmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MTc1NzksImV4cCI6MjA4NzA5MzU3OX0.pzswMc2d76CNQz_UBPMS_cO5Jo_WBiNyz9J607h_1vY'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcG9lZXptbWR3dGVqd2lycmhwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTUxNzU3OSwiZXhwIjoyMDg3MDkzNTc5fQ.Bnyu2oRQH984Sio9DlHeQxJ-_wnzIa-k9e1Q7yuLGj4'
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    service_role: supabaseServiceRoleKey
  }
})