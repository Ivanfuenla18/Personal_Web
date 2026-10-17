import '../css/Footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="foot text-white text-center py-3">
      <p>© {new Date().getFullYear()} {t('nav.nav_title')}</p>
    </footer>
  );
}

export default Footer;
