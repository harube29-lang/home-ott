import Box from '@mui/material/Box'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// 모든 페이지가 공유하는 기본 레이아웃 (Header + 본문 + Footer)
const PageLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default PageLayout
