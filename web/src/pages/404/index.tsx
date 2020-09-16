import React from 'react';
import BackButton from '../../components/BackButton';

import './styles.css';

const Page404: React.FC = () => {
  return (
      <div className="main-404">
        <BackButton to="/" />
        <div className="content-404">
          <h1>404</h1>
          <h2>Página não encontrada</h2>
        </div>
      </div>
  );
}

export default Page404;