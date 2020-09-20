import React from 'react';
import Schedule from '../../Schedule';

import './styles.css';

const Reports: React.FC = () => {
  return (
    <div className="main-reports">
      <div className="reports-bar">
        <ul>
          <li>
            <h1>Relatório Geral</h1>
            <span>17/05/20 15:30</span>
          </li>
          <li>
            <h1>Relatório Geral</h1>
            <span>17/05/20 15:30</span>
          </li>
          <li>
            <h1>Relatório Geral</h1>
            <span>17/05/20 15:30</span>
          </li>
        </ul>
      </div>
      <Schedule sideContainerSize={400} />
    </div>
  );
}

export default Reports;