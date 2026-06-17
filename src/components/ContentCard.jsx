import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Netflix 스타일 콘텐츠 카드: Hover 시 확대 + 그림자 + 상세정보(장르/설명) 표시
const ContentCard = ({ content }) => {
  return (
    <Box
      component="article"
      tabIndex={0}
      aria-label={`${content.title}, ${content.genre}`}
      sx={{
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        bgcolor: 'var(--color-surface)',
        cursor: 'pointer',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
        '&:hover, &:focus-visible': {
          transform: 'scale(1.06)',
          boxShadow: '0 16px 32px rgba(0,0,0,0.6)',
          zIndex: 2,
        },
        '&:hover .content-card-info, &:focus-visible .content-card-info': {
          opacity: 1,
        },
      }}
    >
      <Box
        component="img"
        src={content.poster_url}
        alt={`${content.title} 포스터`}
        loading="lazy"
        sx={{ width: '100%', aspectRatio: '2 / 3', objectFit: 'cover' }}
      />

      <Box
        className="content-card-info"
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: 1.5,
          opacity: 0,
          transition: 'opacity var(--transition-fast)',
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 10%, rgba(0,0,0,0.2) 70%, transparent)',
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          {content.title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'var(--color-primary)', fontWeight: 700 }}>
          {content.genre}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'var(--color-subtext)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {content.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default ContentCard
