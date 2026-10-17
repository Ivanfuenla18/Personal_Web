import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Home.css';

function Home() {
  const { t, i18n } = useTranslation('conf'); 
  const [key, setKey] = useState(0); 

  useEffect(() => {
    setKey(prevKey => prevKey + 1); 
  }, [i18n.language]); 

  return (
    <section className="fondo">
      <h1 key={key} className='fondo-texto'>{t('home.welcome')}</h1>
    </section>
  );
}

export default Home;
