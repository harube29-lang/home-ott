import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { toBackdropUrl } from '../utils/image.js'
import TrailerModal from './TrailerModal.jsx'

// Hero Section: 대표 콘텐츠 배너 + 오버레이 + CTA(지금 시청하기 / 예고편 보기)
const Hero = ({ content }) => {
  const [trailerOpen, setTrailerOpen] = useState(false)

  if (!content) return null

  return (
    <Box
      id="hero"
      component="section"
      aria-label="대표 콘텐츠"
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '88vh' },
        minHeight: 480,
        display: 'flex',
        alignItems: 'flex-end',
        color: 'var(--color-text)',
        backgroundImage: `url(${toBackdropUrl(content.poster_url)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 오버레이: 텍스트 가독성을 위한 그래디언트 */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, var(--color-bg) 5%, rgba(15,15,15,0.4) 45%, rgba(15,15,15,0.75) 100%)',
        }}
      />

      <Box
        className="fade-up"
        sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 6 }, maxWidth: 680 }}
      >
        <Typography variant="caption" sx={{ color: 'var(--color-primary)', fontWeight: 700 }}>
          오늘의 대표 콘텐츠
        </Typography>
        <Typography variant="h1" component="h1" sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
          {content.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--color-subtext)', mb: 3, maxWidth: 560 }}>
          {content.description}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrowIcon />}
            sx={{ bgcolor: 'var(--color-text)', color: '#000', '&:hover': { bgcolor: '#d9d9d9' } }}
          >
            지금 시청하기
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<InfoOutlinedIcon />}
            onClick={() => setTrailerOpen(true)}
            sx={{
              color: 'var(--color-text)',
              borderColor: 'var(--color-subtext)',
              '&:hover': { borderColor: 'var(--color-text)', bgcolor: 'rgba(255,255,255,0.08)' },
            }}
          >
            예고편 보기
          </Button>
        </Stack>
      </Box>

      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} title={content.title} />
    </Box>
  )
}

export default Hero
