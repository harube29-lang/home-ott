import { createTheme } from '@mui/material/styles'

// HOME-OTT 다크 테마: 디자인 시스템(docs/design-system.md) 색상 토큰을 MUI 팔레트에 매핑
// 2026 리브랜딩: Netflix 레드/블랙 조합에서 벗어나 앰버 골드 포인트의
// "프리미엄 시네마" 톤으로 전환 (컬러 토큰은 src/css/style.css의 CSS 변수와 1:1로 매핑됨)
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E7A33E',
      dark: '#CF8F31',
      contrastText: '#141013',
    },
    background: {
      default: '#0B0C10',
      paper: '#15171D',
    },
    text: {
      primary: '#F3F1EA',
      secondary: '#93909F',
    },
  },
  typography: {
    fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Noto Serif KR", serif', fontSize: '2.125rem', fontWeight: 900 },
    h2: { fontFamily: '"Noto Serif KR", serif', fontSize: '1.5rem', fontWeight: 700 },
    h3: { fontFamily: '"Noto Serif KR", serif', fontSize: '1.25rem', fontWeight: 700 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
    caption: { fontSize: '0.75rem', fontWeight: 400 },
  },
  spacing: 8,
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 700, textTransform: 'none' },
      },
    },
  },
})

export default theme
