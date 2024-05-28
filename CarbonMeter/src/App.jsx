import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CO2Table from './CO2Table';
import emissionsData from '/src/assets/countriesAndCompanies.json';

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ entity: '', showCountries: true, showCompanies: true });
  const [sort, setSort] = useState({ column: 'parent_entity', direction: 'asc' });

  useEffect(() => {
    const filteredData = emissionsData.filter(item => item.year === 2022);
    setData(filteredData);
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilter({ ...filter, [name]: checked });
  };

  const handleSortChange = (column) => {
    const direction = sort.direction === 'asc' ? 'desc' : 'asc';
    setSort({ column, direction });
  };

  const filteredAndSortedData = data
  .filter(item => {
    const entityMatch = filter.entity === '' || item.parent_entity.toLowerCase().includes(filter.entity.toLowerCase());
    const countryMatch = filter.showCountries && item.parent_type === 'Nation State';
    const companyMatch = filter.showCompanies && item.parent_type !== 'Nation State';
    return entityMatch && (countryMatch || companyMatch);
  })
  .sort((a, b) => {
    const aValue = sort.column === 'total_emissions_MtCO2e' ? parseFloat(a[sort.column]) : a[sort.column];
    const bValue = sort.column === 'total_emissions_MtCO2e' ? parseFloat(b[sort.column]) : b[sort.column];
    
    if (aValue < bValue) {
      return sort.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sort.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="App">
      <Header />
      <main className="content">
          <h1>CO2 Emissions Data for 2022</h1>   
          <p className="subtitle">Based on the Carbon Majors dataset of 122 emitting entities</p>
        <div className="filters">
          <label>
            <input
              type="checkbox"
              name="showCountries"
              checked={filter.showCountries}
              onChange={handleCheckboxChange}
            />
            Show Countries
          </label>
          <label>
            <input
              type="checkbox"
              name="showCompanies"
              checked={filter.showCompanies}
              onChange={handleCheckboxChange}
            />
            Show Companies
          </label>
        </div>
        <div className="filters">
          <input
            type="text"
            name="entity"
            placeholder="Search for entity"
            value={filter.entity}
            onChange={handleFilterChange}
          />
        </div>
        <CO2Table data={filteredAndSortedData} onSortChange={handleSortChange} />
      </main>
      <Footer />
    </div>
  );
};

export default App;