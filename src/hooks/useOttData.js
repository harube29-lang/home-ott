import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient.js'
import { sampleContents, sampleRecommendations } from '../data/sampleContents.js'

// Supabase의 contents/recommendations 테이블에서 데이터를 가져온다.
// 환경 변수가 없거나 조회에 실패하면 샘플 데이터로 자동 대체해 화면이 비어 보이지 않게 한다.
export function useOttData() {
  const [contents, setContents] = useState(sampleContents)
  const [recommendations, setRecommendations] = useState(sampleRecommendations)
  const [loading, setLoading] = useState(isSupabaseConfigured)

  useEffect(() => {
    if (!isSupabaseConfigured) return

    let active = true

    const fetchData = async () => {
      const [contentsRes, recommendationsRes] = await Promise.all([
        supabase.from('contents').select('*').order('id', { ascending: true }),
        supabase.from('recommendations').select('*'),
      ])

      if (!active) return

      if (!contentsRes.error && contentsRes.data?.length) {
        setContents(contentsRes.data)
      }
      if (!recommendationsRes.error && recommendationsRes.data?.length) {
        setRecommendations(recommendationsRes.data)
      }
      setLoading(false)
    }

    fetchData()

    return () => {
      active = false
    }
  }, [])

  return { contents, recommendations, loading }
}
