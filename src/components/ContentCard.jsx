import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

// 콘텐츠 카드: 포스터 + 제목/장르는 카드 하단에 항상 노출, Hover 시 재생 아이콘과 줄거리를 오버레이로 보여준다
const ContentCard = ({ content }) => {
  return (
    <Box
      component="article"
      tabIndex={0}
      aria-label={`${content.title}, ${content.genre}`}
      className="content-card"
      sx={{
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        bgcolor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        cursor: 'pointer',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
        '&:hover, &:focus-visible': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 36px rgba(0,0,0,0.55)',
          zIndex: 2,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={content.poster_url}
          alt={`${content.title} 포스터`}
          loading="lazy"
          sx={{ width: '100%', aspectRatio: '2 / 3', objectFit: 'cover' }}
        />

        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            px: 0.9,
            py: 0.25,
            borderRadius: '4px',
            bgcolor: 'rgba(11,12,16,0.75)',
            border: '1px solid var(--color-primary)',
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
          }}
        >
          NEW
        </Box>

        {/* Hover 프리뷰: 줄거리 + 재생 아이콘 */}
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            p: 1.5,
            gap: 1,
            bgcolor: 'rgba(11,12,16,0)',
            opacity: 0,
            transition: 'opacity var(--transition-fast), background-color var(--transition-fast)',
            '.content-card:hover &, .content-card:focus-visible &': {
              opacity: 1,
              bgcolor: 'rgba(11,12,16,0.82)',
            },
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PlayArrowRoundedIcon sx={{ color: 'var(--color-primary)' }} />
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: 'var(--color-subtext)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {content.description}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: 1.25, py: 1 }}>
        <Typography
          variant="body2"
          noWrap
          sx={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        >
          {content.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}
        >
          {content.genre}
        </Typography>
      </Box>
    </Box>
  )
}

export default ContentCard
