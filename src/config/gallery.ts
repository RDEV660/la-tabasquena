/**
 * Slideshow images live in `public/gallery/`.
 * Add JPEG/PNG/WebP files there, then list them here with alt text for both languages.
 *
 * Example:
 * { src: '/gallery/pan-dulce.jpg', altEn: 'Sweet bread display', altEs: 'Mesa de pan dulce' },
 */
export type GallerySlide = {
  src: string
  altEn: string
  altEs: string
}

export const gallerySlides: GallerySlide[] = [
  // Drop in real bakery photos when ready — paths are relative to /public.
]
