import { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { bindModalDismiss } from '../js/main.js'

// 예고편 모달: 버튼 클릭으로 열리고 ESC 또는 모달 바깥 클릭으로 닫힌다.
const TrailerModal = ({ open, onClose, title }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    return bindModalDismiss({ onClose, dialogRef })
  }, [open, onClose])

  if (!open) return null

  return (
    <Box
      role="presentation"
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'rgba(0,0,0,0.8)',
        zIndex: 1300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} 예고편`}
        sx={{
          width: '100%',
          maxWidth: 720,
          bgcolor: 'var(--color-surface)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant="h3" component="h2">
            {title} - 예고편
          </Typography>
          <IconButton onClick={onClose} aria-label="예고편 모달 닫기" sx={{ color: 'var(--color-text)' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            aspectRatio: '16 / 9',
            bgcolor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ color: 'var(--color-subtext)' }}>
            예고편 영상 준비 중입니다.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TrailerModal
