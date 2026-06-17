import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { toBackdropUrl } from '../utils/image.js'
import TrailerModal from './TrailerModal.jsx'

// 상세 소개 영역: 강조 콘텐츠의 장르/공개일/시청등급/러닝타임을 포함한 배너
const FeaturedBanner = ({ content }) => {
  const [trailerOpen, setTrailerOpen] = useState(false)

  if (!content) return null

  return (
    <Box component="section" id="featured" className="fade-up" sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
      <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
        상세 소개
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' },
          gap: { xs: 2, md: 4 },
          bgcolor: 'var(--color-surface)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={toBackdropUrl(content.poster_url)}
          alt={`${content.title} 대표 이미지`}
          loading="lazy"
          sx={{ width: '100%', height: { xs: 220, md: '100%' }, objectFit: 'cover' }}
        />

        <Stack spacing={2} sx={{ p: { xs: 2, md: 4 }, justifyContent: 'center' }}>
          <Typography variant="h3" component="h3">
            {content.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--color-subtext)' }}>
            {content.description}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Chip label={content.genre} sx={{ bgcolor: 'var(--color-primary)', color: '#fff', fontWeight: 700 }} />
            <Chip
              label={`공개일 ${content.release_date}`}
              variant="outlined"
              sx={{ color: 'var(--color-text)', borderColor: 'var(--color-subtext)' }}
            />
            <Chip
              label={content.rating}
              variant="outlined"
              sx={{ color: 'var(--color-text)', borderColor: 'var(--color-subtext)' }}
            />
            <Chip
              label={`러닝타임 ${content.runtime}`}
              variant="outlined"
              sx={{ color: 'var(--color-text)', borderColor: 'var(--color-subtext)' }}
            />
          </Stack>

          <Box>
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              onClick={() => setTrailerOpen(true)}
              sx={{ bgcolor: 'var(--color-primary)', '&:hover': { bgcolor: '#b80710' } }}
            >
              예고편 보기
            </Button>
          </Box>
        </Stack>
      </Box>

      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} title={content.title} />
    </Box>
  )
}

export default FeaturedBanner
