import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PageLayout from '../components/PageLayout.jsx'

const SupportPage = () => {
  return (
    <PageLayout>
      <Box sx={{ px: { xs: 2, md: 4 }, py: 6, maxWidth: 760, mx: 'auto' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, fontSize: '2rem' }}>
          고객센터
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 3 }}>
          서비스 이용 중 궁금한 점이나 불편한 사항이 있다면 아래 이메일로 문의해 주세요. 영업일 기준
          1~2일 내에 답변드립니다.
        </Typography>
        <Button
          variant="contained"
          component="a"
          href="mailto:support@home-ott.example.com"
          sx={{ bgcolor: 'var(--color-primary)', '&:hover': { bgcolor: '#b80710' } }}
        >
          이메일로 문의하기
        </Button>
      </Box>
    </PageLayout>
  )
}

export default SupportPage
