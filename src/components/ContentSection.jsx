import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ContentCard from './ContentCard.jsx'

// 주요 콘텐츠 영역: 반응형 그리드 (Desktop 4~6열 / Tablet 3열 / Mobile 1~2열)
const ContentSection = ({ contents }) => {
  return (
    <Box component="section" id="contents" className="fade-up" sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
      <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
        주요 콘텐츠
      </Typography>

      {contents.length === 0 ? (
        <Typography sx={{ color: 'var(--color-subtext)' }}>
          조건에 맞는 콘텐츠가 없습니다.
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(2, 1fr)',
            '@media (max-width: 420px)': { gridTemplateColumns: 'repeat(1, 1fr)' },
            '@media (min-width: 768px) and (max-width: 1199px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media (min-width: 1200px)': { gridTemplateColumns: 'repeat(5, 1fr)' },
          }}
        >
          {contents.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default ContentSection
