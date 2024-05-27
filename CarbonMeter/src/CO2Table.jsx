import React, { useState, useEffect } from 'react';

const CO2Table = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'country', direction: 'ascending' });

  useEffect(() => {
    fetch('/countries.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const nestedData = data.fossil_CO2_totals_by_country;
        const mappedData = nestedData.map(row => ({
          country: row['Country'],
          emissions: parseFloat(row['2022'])
        }));
        setData(mappedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter(row =>
    row.country.toLowerCase().includes(filter.toLowerCase())
  );

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by country"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('country')}>Country</th>
            <th onClick={() => requestSort('emissions')}>CO2 Emissions (Mt CO2/yr)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.country}>
              <td>{row.country}</td>
              <td>{row.emissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CO2Table;
