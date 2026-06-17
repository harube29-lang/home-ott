import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useOttFilter } from '../contexts/OttFilterContext.jsx'
import { GENRES } from '../data/genres.js'

// 상단 네비게이션: 좌측 로고 / 중앙 장르 메뉴(클릭 시 홈에서 필터링) / 우측 검색·마이페이지.
// Sticky + 스크롤 시 배경 전환, 현재 선택된 장르를 Active로 표시한다.
const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchInputRef = useRef(null)
  const { genre, setGenre, searchTerm, setSearchTerm } = useOttFilter()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  const goHome = () => {
    if (location.pathname !== '/') navigate('/')
  }

  const handleGenreClick = (g) => {
    setGenre(g)
    goHome()
  }

  const handleSearchToggle = () => {
    if (searchOpen && searchTerm) setSearchTerm('')
    setSearchOpen((prev) => !prev)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    goHome()
  }

  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: scrolled ? 'rgba(15,15,15,0.95)' : 'transparent',
        backgroundImage: scrolled
          ? 'none'
          : 'linear-gradient(to bottom, rgba(15,15,15,0.85), transparent)',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.5)' : 'none',
        transition: 'background-color var(--transition-base), box-shadow var(--transition-base)',
      }}
    >
      <Toolbar sx={{ gap: { xs: 1, md: 3 }, minHeight: 'var(--header-height)' }}>
        <Box
          component={Link}
          to="/"
          aria-label="HOME-OTT 홈으로 이동"
          sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
        >
          <Box
            component="img"
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="HOME-OTT 로고"
            sx={{ height: 26, width: 'auto' }}
          />
        </Box>

        <Stack
          component="nav"
          direction="row"
          aria-label="콘텐츠 장르 메뉴"
          sx={{
            flex: 1,
            overflowX: 'auto',
            gap: { xs: 1.5, md: 2.5 },
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {GENRES.map((g) => (
            <Box
              key={g}
              component="button"
              type="button"
              onClick={() => handleGenreClick(g)}
              aria-current={genre === g && location.pathname === '/' ? 'true' : undefined}
              sx={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontSize: '0.9rem',
                fontWeight: genre === g ? 700 : 400,
                color: genre === g ? 'var(--color-text)' : 'var(--color-subtext)',
                borderBottom: genre === g ? '2px solid var(--color-primary)' : '2px solid transparent',
                padding: '4px 2px',
                transition: 'color var(--transition-fast)',
                '&:hover': { color: 'var(--color-text)' },
              }}
            >
              {g}
            </Box>
          ))}
        </Stack>

        <Stack direction="row" sx={{ flexShrink: 0, alignItems: 'center' }}>
          {searchOpen && (
            <Box
              component="form"
              onSubmit={handleSearchSubmit}
              sx={{
                bgcolor: 'rgba(0,0,0,0.6)',
                border: '1px solid var(--color-subtext)',
                borderRadius: 1,
                px: 1,
                mr: 1,
              }}
            >
              <InputBase
                inputRef={searchInputRef}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="제목 검색"
                aria-label="콘텐츠 제목 검색"
                sx={{ color: 'var(--color-text)', fontSize: '0.9rem', width: { xs: 110, sm: 180 } }}
              />
            </Box>
          )}
          <IconButton
            onClick={handleSearchToggle}
            aria-label={searchOpen ? '검색창 닫기' : '검색 열기'}
            sx={{ color: 'var(--color-text)' }}
          >
            {searchOpen ? <CloseIcon /> : <SearchIcon />}
          </IconButton>
          <IconButton
            component={Link}
            to="/mypage"
            aria-label="마이페이지로 이동"
            sx={{ color: 'var(--color-text)' }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
