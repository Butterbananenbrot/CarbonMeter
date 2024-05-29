import React from 'react';

const CO2Table = ({ data, onSortChange }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => onSortChange('parent_entity')}>Entity</th>
            <th onClick={() => onSortChange('total_emissions_MtCO2e')}>(MtCO<sub>2</sub>)e</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.parent_entity}</td>
              <td>{isNaN(item.total_emissions_MtCO2e) ? 'N/A' : parseFloat(item.total_emissions_MtCO2e).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CO2Table;

