import Icon from '../ui/Icon';
import { whatsappLink } from '../../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      className="float-whatsapp"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with OBARBA on WhatsApp"
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
