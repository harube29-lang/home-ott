import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PageLayout from '../components/PageLayout.jsx'

const PrivacyPage = () => {
  return (
    <PageLayout>
      <Box sx={{ px: { xs: 2, md: 4 }, py: 6, maxWidth: 760, mx: 'auto' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, fontSize: '2rem' }}>
          개인정보처리방침
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 2 }}>
          HOME-OTT는 이용자의 개인정보를 중요시하며, 관련 법령을 준수합니다. 본 페이지는 데모/과제
          프로젝트의 예시 문서로, 실제 개인정보 수집은 이루어지지 않습니다.
        </Typography>
        <Typography variant="h3" component="h2" sx={{ mt: 3, mb: 1 }}>
          수집하는 정보
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 2 }}>
          현재 서비스는 별도의 회원가입 절차가 없으며, 콘텐츠 열람 및 검색 기록 외의 개인정보를
          수집하지 않습니다.
        </Typography>
      </Box>
    </PageLayout>
  )
}

export default PrivacyPage
