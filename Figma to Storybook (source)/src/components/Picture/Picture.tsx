import aboutPhoto from '../../assets/about-photo.jpg';
import './Picture.css';

export type PictureProps = {
  src?: string;
  alt?: string;
  className?: string;
};

/**
 * Figma "Picture": square photo. It fills its container; the Figma sizes
 * are 440 (desktop), 356 (tablet), 327 (mobile). The default photo is
 * pre-cropped to the Figma framing.
 */
export function Picture({ src = aboutPhoto, alt = '', className }: PictureProps) {
  return (
    <div className={['picture', className].filter(Boolean).join(' ')}>
      <img src={src} width={880} height={880} loading="lazy" alt={alt} />
    </div>
  );
}
