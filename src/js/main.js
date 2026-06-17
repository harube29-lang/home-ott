// 순수 JavaScript 유틸리티 모듈.
// React 컴포넌트의 useEffect에서 호출되어 DOM 인터랙션(스크롤 애니메이션, 스크롤 스파이)을 담당한다.
// HTML/CSS/JS 역할 분리 원칙에 따라 DOM 조작 로직을 컴포넌트 밖으로 분리했다.

/**
 * data-fade-up 속성이 있는 요소들을 관찰하여 화면에 들어오면 'is-visible' 클래스를 추가한다.
 * (Scroll Animation: Intersection Observer + Fade Up)
 * @returns {() => void} cleanup 함수 (observer.disconnect)
 */
export function initFadeUpObserver() {
  const targets = document.querySelectorAll('.fade-up')
  if (!targets.length) return () => {}

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  targets.forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}

/**
 * 뷰포트 안에서 가장 위에 보이는 섹션의 id를 추적하여 콜백으로 전달한다.
 * (Navigation Active: 현재 섹션 표시)
 * @param {string[]} sectionIds - 추적할 섹션 id 배열
 * @param {(activeId: string) => void} onChange - 활성 섹션이 바뀔 때 호출되는 콜백
 * @returns {() => void} cleanup 함수
 */
export function initScrollSpy(sectionIds, onChange) {
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean)
  if (!sections.length) return () => {}

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onChange(entry.target.id)
        }
      })
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  )

  sections.forEach((section) => observer.observe(section))
  return () => observer.disconnect()
}

/**
 * 모달 오픈 시 ESC 키 또는 외부 클릭으로 닫히도록 이벤트를 바인딩한다.
 * @param {{ onClose: () => void, dialogRef: { current: HTMLElement | null } }} params
 * @returns {() => void} cleanup 함수
 */
export function bindModalDismiss({ onClose, dialogRef }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
  }
  const handlePointerDown = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      onClose()
    }
  }

  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('mousedown', handlePointerDown)

  return () => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('mousedown', handlePointerDown)
  }
}
