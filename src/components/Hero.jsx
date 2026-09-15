import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
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
            'linear-gradient(to top, var(--color-bg) 5%, rgba(11,12,16,0.45) 45%, rgba(11,12,16,0.78) 100%)',
        }}
      />

      <Box
        className="fade-up"
        sx={{ position: 'relative', zIndex: 1, p: { xs: 3, md: 6 }, maxWidth: 680 }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Pick of the Day
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontFamily: 'var(--font-display)', mt: 1, mb: 1.5, fontSize: { xs: '2.1rem', md: '3.2rem' } }}
        >
          {content.title}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 2 }}>
          {content.genre && (
            <Chip
              label={content.genre}
              size="small"
              sx={{
                bgcolor: 'var(--color-primary-soft)',
                color: 'var(--color-primary)',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
              }}
            />
          )}
          {content.rating && (
            <Chip
              label={content.rating}
              size="small"
              variant="outlined"
              sx={{ borderColor: 'var(--color-border)', color: 'var(--color-subtext)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}
            />
          )}
          {content.runtime && (
            <Chip
              label={content.runtime}
              size="small"
              variant="outlined"
              sx={{ borderColor: 'var(--color-border)', color: 'var(--color-subtext)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}
            />
          )}
        </Stack>

        <Typography variant="body1" sx={{ color: 'var(--color-subtext)', mb: 3, maxWidth: 560 }}>
          {content.description}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrowIcon />}
            sx={{ bgcolor: 'var(--color-primary)', color: '#141013', '&:hover': { bgcolor: 'var(--color-primary-dark)' } }}
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
