import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 환경 변수가 없거나 빈 문자열일 때(.env 미설정, CI 시크릿 미등록 시 ""로 평가됨)도
// 앱이 죽지 않도록 client는 항상 생성하고, 호출하는 쪽(useOttData)에서 실패 시 샘플 데이터로 대체한다.
// '??'는 빈 문자열을 폴백하지 않으므로 falsy 체크가 가능한 '||'를 사용한다.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)
