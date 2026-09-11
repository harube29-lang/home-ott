import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { initScrollSpy } from '../js/main.js'

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'contents', label: '새로 올라온 콘텐츠' },
  { id: 'featured', label: 'HOT 콘텐츠' },
  { id: 'recommend', label: '추천 콘텐츠' },
]

// 인터랙션: Navigation Active - 현재 화면에 보이는 섹션을 점(dot)으로 표시하고 클릭 시 해당 섹션으로 스크롤
const SectionNav = () => {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    return initScrollSpy(SECTIONS.map((s) => s.id), setActive)
  }, [])

  return (
    <Box
      aria-label="섹션 이동"
      sx={{
        position: 'fixed',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      {SECTIONS.map((s) => (
        <Box
          key={s.id}
          component="a"
          href={`#${s.id}`}
          aria-label={`${s.label} 섹션으로 이동`}
          aria-current={active === s.id ? 'true' : undefined}
          sx={{
            width: active === s.id ? 12 : 8,
            height: active === s.id ? 12 : 8,
            borderRadius: '50%',
            bgcolor: active === s.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.4)',
            transition: 'all var(--transition-fast)',
            '&:hover': { bgcolor: 'var(--color-primary)' },
          }}
        />
      ))}
    </Box>
  )
}

export default SectionNav
