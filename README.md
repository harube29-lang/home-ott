# HOME-OTT

OTT 서비스 콘텐츠 소개 랜딩페이지. React + Vite로 제작했고, Supabase를 백엔드 없이 직접 연동했다.

## 기술 스택

- React 18 + Vite 5
- MUI(Material UI) + CSS 변수 기반 다크 테마
- React Router
- Supabase JS SDK (`contents`, `recommendations` 테이블)
- GitHub Actions → GitHub Pages 자동 배포

## 로컬 실행

```bash
npm install
cp .env.example .env   # VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY 입력
npm run dev
```

## 빌드

```bash
npm run build
```

## 문서

- [docs/test-report.md](docs/test-report.md) - 테스트/점검 리포트
