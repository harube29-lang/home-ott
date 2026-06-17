import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout.jsx'

const NotFoundPage = () => {
  return (
    <PageLayout>
      <Box sx={{ px: 2, py: 10, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" sx={{ mb: 2, fontSize: '2.5rem' }}>
          404
        </Typography>
        <Typography sx={{ color: 'var(--color-subtext)', mb: 3 }}>
          요청하신 페이지를 찾을 수 없습니다.
        </Typography>
        <Button component={Link} to="/" variant="contained" sx={{ bgcolor: 'var(--color-primary)' }}>
          홈으로 돌아가기
        </Button>
      </Box>
    </PageLayout>
  )
}

export default NotFoundPage
