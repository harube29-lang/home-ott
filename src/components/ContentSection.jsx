import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ContentCard from './ContentCard.jsx'

// 주요 콘텐츠 영역: Mobile은 가로 스크롤 1행 / Tablet 3열 그리드 / Desktop 5열 그리드
const ContentSection = ({ contents }) => {
  return (
    <Box component="section" id="contents" className="fade-up" sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
      <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
        넷플릭스 새로 올라온 콘텐츠
      </Typography>

      {contents.length === 0 ? (
        <Typography sx={{ color: 'var(--color-subtext)' }}>
          조건에 맞는 콘텐츠가 없습니다.
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pb: 1,
            '& > *': { flex: '0 0 42%', scrollSnapAlign: 'start' },
            '@media (min-width: 768px)': {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              overflowX: 'visible',
              pb: 0,
              '& > *': { flex: 'unset' },
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
