import Icon from './Icon';
import { SITE } from '../../config/site';

/** Small note marking temporary sample content. Hidden when SITE.showSampleNotices is false. */
export default function SampleNotice({ children, className = '' }) {
  if (!SITE.showSampleNotices) return null;
  return (
    <p className={`sample-notice ${className}`}>
      <Icon name="sparkle" size={14} />
      <span>{children}</span>
    </p>
  );
}
