import React from 'react';
import './Hospital.css';
import Footer from '../Footer/Footer';
const departments = [
 { id: 1, name: 'Hospital1', description: 'Specialized in heart care(5KM)' },
 { id: 2, name: 'Hospital2', description: 'Specialized in brain and nervous system (2km)' },
 { id: 3, name: 'Hospital3', description: 'Specialized in heart care (3km)' },
 { id: 4, name: 'Hospital4', description: 'Specialized in brain and nervous system (1.5km)' },
 { id: 5, name: 'Hospital5', description: 'Specialized in heart care (0.5km)' },
 { id: 6, name: 'Hospital6', description: 'Specialized in brain and nervous system(50m)' },
 { id: 7, name: 'Hospital7', description: 'Specialized in heart care (35km)' },
 { id: 8, name: 'Hospital8', description: 'Specialized in brain and nervous system (12km)' },
 // Add more departments as needed
];

const DepartmentList = () => {
 return (
  <>
  <div className='hosp-main'>
    <div className="department-list">
      {departments.map(department => (
        <div key={department.id} className="department-item">
          <h2>{department.name}</h2>
          <p>{department.description}</p>
        </div>
      ))}
    </div>
    </div>
    
    </>
 );
};

export default DepartmentList;
