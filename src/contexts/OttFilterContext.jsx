import { createContext, useContext, useMemo, useState } from 'react'

// Header(장르 메뉴/검색)와 HomePage(콘텐츠 목록) 사이에서 필터 상태를 공유하기 위한 컨텍스트.
// 어떤 페이지에서 장르를 클릭하거나 검색해도 홈으로 이동했을 때 동일한 필터가 적용된다.
const OttFilterContext = createContext(null)

export function OttFilterProvider({ children }) {
  const [genre, setGenre] = useState('전체')
  const [searchTerm, setSearchTerm] = useState('')

  const value = useMemo(
    () => ({ genre, setGenre, searchTerm, setSearchTerm }),
    [genre, searchTerm]
  )

  return <OttFilterContext.Provider value={value}>{children}</OttFilterContext.Provider>
}

export function useOttFilter() {
  const ctx = useContext(OttFilterContext)
  if (!ctx) throw new Error('useOttFilter는 OttFilterProvider 내부에서만 사용할 수 있습니다.')
  return ctx
}
