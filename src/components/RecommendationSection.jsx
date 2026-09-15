import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RecommendationCard from './RecommendationCard.jsx'

// 추천 콘텐츠 영역: 가로 스크롤 (최소 4개)
const RecommendationSection = ({ recommendations, contents }) => {
  const items = recommendations
    .map((rec) => ({ ...rec, content: contents.find((c) => c.id === rec.content_id) }))
    .filter((rec) => rec.content)

  if (items.length === 0) return null

  return (
    <Box component="section" id="recommend" className="fade-up" sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mb: 0.5,
          color: 'var(--color-primary)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        Picked For You
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
        당신을 위한 추천 콘텐츠
      </Typography>

      <Box
        className="scroll-row"
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          pb: 1,
        }}
      >
        {items.map((rec) => (
          <RecommendationCard key={rec.id} content={rec.content} reason={rec.reason} />
        ))}
      </Box>
    </Box>
  )
}

export default RecommendationSection
