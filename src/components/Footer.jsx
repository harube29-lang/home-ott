import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import XIcon from '@mui/icons-material/X'
import IconButton from '@mui/material/IconButton'

// 푸터: 서비스 소개 / 이용약관 / 개인정보처리방침 / SNS 링크 / 고객센터 (Dead Link 없음 - 실제 라우트/외부 링크로 연결)
const Footer = () => {
  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        bgcolor: 'var(--color-bg)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        px: { xs: 2, md: 4 },
        py: 4,
        color: 'var(--color-subtext)',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 4 }}
        sx={{ justifyContent: 'space-between' }}
      >
        <Box>
          <Typography variant="body2" sx={{ color: 'var(--color-text)', fontWeight: 700, mb: 1 }}>
            HOME-OTT
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', maxWidth: 320 }}>
            HOME-OTT는 프리미엄 콘텐츠를 한곳에서 즐길 수 있는 OTT 소개 서비스입니다.
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2.5}
          component="nav"
          aria-label="푸터 메뉴"
          sx={{ flexWrap: 'wrap', rowGap: 1, '& a': { whiteSpace: 'nowrap' } }}
        >
          <Link to="/about">서비스 소개</Link>
          <Link to="/terms">이용약관</Link>
          <Link to="/privacy">개인정보처리방침</Link>
          <Link to="/support">고객센터</Link>
        </Stack>

        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="인스타그램으로 이동"
            sx={{ color: 'var(--color-subtext)' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X(트위터)로 이동"
            sx={{ color: 'var(--color-subtext)' }}
          >
            <XIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="유튜브로 이동"
            sx={{ color: 'var(--color-subtext)' }}
          >
            <YouTubeIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Typography variant="caption" sx={{ display: 'block', mt: 3, opacity: 0.7 }}>
        © {new Date().getFullYear()} HOME-OTT. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
