// Unsplash 포스터(400x600) URL을 Hero/FeaturedBanner용 와이드 배경(1600x900)으로 변환한다.
export function toBackdropUrl(posterUrl) {
  return posterUrl.replace('w=400&h=600', 'w=1600&h=900')
}
