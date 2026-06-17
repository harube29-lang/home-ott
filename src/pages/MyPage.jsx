import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PageLayout from '../components/PageLayout.jsx'

const MyPage = () => {
  return (
    <PageLayout>
      <Box sx={{ px: { xs: 2, md: 4 }, py: 6, maxWidth: 760, mx: 'auto' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, fontSize: '2rem' }}>
          마이페이지
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)' }}>
          로그인 기능은 이번 과제 범위에 포함되지 않습니다. 추후 Supabase Auth 연동을 통해
          시청 기록, 찜한 콘텐츠 등을 제공할 예정입니다.
        </Typography>
      </Box>
    </PageLayout>
  )
}

export default MyPage
