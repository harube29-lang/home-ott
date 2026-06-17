import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// 추천 콘텐츠 카드: 포스터 + 제목 + 추천 이유
const RecommendationCard = ({ content, reason }) => {
  if (!content) return null

  return (
    <Box
      component="article"
      tabIndex={0}
      aria-label={`추천: ${content.title}`}
      sx={{
        flex: '0 0 auto',
        width: { xs: 160, md: 200 },
        scrollSnapAlign: 'start',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        bgcolor: 'var(--color-surface)',
        transition: 'transform var(--transition-fast)',
        '&:hover, &:focus-visible': { transform: 'translateY(-6px)' },
      }}
    >
      <Box
        component="img"
        src={content.poster_url}
        alt={`${content.title} 포스터`}
        loading="lazy"
        sx={{ width: '100%', aspectRatio: '2 / 3', objectFit: 'cover' }}
      />
      <Box sx={{ p: 1.25 }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }} noWrap>
          {content.title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'var(--color-subtext)' }}>
          {reason}
        </Typography>
      </Box>
    </Box>
  )
}

export default RecommendationCard
