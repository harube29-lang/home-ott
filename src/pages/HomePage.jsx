import { useEffect, useMemo } from 'react'
import PageLayout from '../components/PageLayout.jsx'
import SectionNav from '../components/SectionNav.jsx'
import Hero from '../components/Hero.jsx'
import ContentSection from '../components/ContentSection.jsx'
import FeaturedBanner from '../components/FeaturedBanner.jsx'
import RecommendationSection from '../components/RecommendationSection.jsx'
import { useOttFilter } from '../contexts/OttFilterContext.jsx'
import { initFadeUpObserver } from '../js/main.js'
import { useOttData } from '../hooks/useOttData.js'

// 랜딩페이지 메인: Hero -> 주요 콘텐츠 -> 상세 소개 -> 추천 콘텐츠 순서로 구성
const HomePage = () => {
  const { genre, searchTerm } = useOttFilter()
  const { contents, recommendations } = useOttData()

  useEffect(() => initFadeUpObserver(), [contents])

  const heroContent = useMemo(
    () => contents.find((c) => c.featured) ?? contents[0],
    [contents]
  )
  const featuredContent = useMemo(
    () => contents.find((c) => c.featured && c.id !== heroContent?.id) ?? contents[1],
    [contents, heroContent]
  )

  const filteredContents = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase()
    return contents.filter((c) => {
      const matchesGenre = genre === '전체' || c.genre === genre
      const matchesKeyword = !keyword || c.title.toLowerCase().includes(keyword)
      return matchesGenre && matchesKeyword
    })
  }, [contents, genre, searchTerm])

  return (
    <PageLayout>
      <SectionNav />
      <Hero content={heroContent} />
      <ContentSection contents={filteredContents} />
      <FeaturedBanner content={featuredContent} />
      <RecommendationSection recommendations={recommendations} contents={contents} />
    </PageLayout>
  )
}

export default HomePage
