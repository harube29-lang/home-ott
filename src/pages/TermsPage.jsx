import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PageLayout from '../components/PageLayout.jsx'

const TermsPage = () => {
  return (
    <PageLayout>
      <Box sx={{ px: { xs: 2, md: 4 }, py: 6, maxWidth: 760, mx: 'auto' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, fontSize: '2rem' }}>
          이용약관
        </Typography>
        <Typography variant="h3" component="h2" sx={{ mt: 3, mb: 1 }}>
          제1조 (목적)
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 2 }}>
          본 약관은 HOME-OTT(이하 &ldquo;서비스&rdquo;)가 제공하는 콘텐츠 소개 서비스 이용과 관련하여 회사와
          이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
        </Typography>
        <Typography variant="h3" component="h2" sx={{ mt: 3, mb: 1 }}>
          제2조 (서비스의 제공)
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 2 }}>
          서비스는 콘텐츠 정보 제공, 추천 콘텐츠 안내 등의 기능을 제공하며, 운영상 필요에 따라
          서비스 내용을 변경할 수 있습니다.
        </Typography>
      </Box>
    </PageLayout>
  )
}

export default TermsPage
