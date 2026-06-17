import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PageLayout from '../components/PageLayout.jsx'

const AboutPage = () => {
  return (
    <PageLayout>
      <Box sx={{ px: { xs: 2, md: 4 }, py: 6, maxWidth: 760, mx: 'auto' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, fontSize: '2rem' }}>
          서비스 소개
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 2 }}>
          HOME-OTT는 드라마, 영화, 예능, 애니, 시사교양, 해외 시리즈, LIVE 콘텐츠를 한곳에서 만날 수 있는
          프리미엄 콘텐츠 소개 플랫폼입니다.
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 2 }}>
          매주 새롭게 업데이트되는 추천 콘텐츠와 시청 데이터를 기반으로, 사용자에게 꼭 맞는 콘텐츠를
          제안합니다.
        </Typography>
      </Box>
    </PageLayout>
  )
}

export default AboutPage
