import React from 'react';
import './Homepage.css'; // Import the CSS file
import DepartmentList from '../Hospitals/Hospitals';
import FooterHome from '../Footer/FooterHome';
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
const Homepage = () => {
 return (
  <>
    <div className="homepage">
      <button className='sos-button'><a href='FirstAid'>SOS</a></button><br></br>
      <h1 className="homepage-title">Welcome to Our Healthcare APP</h1>
      <p className="homepage-description">Your trusted source for health information and services.</p>
      {/* Add more content here */}
    </div>
    <div className="department-list1">
      {departments.map(department => (
        <div key={department.id} className="department-item1">
          <h2>{department.name}</h2>
          <p>{department.description}</p>
        </div>
      ))}
    </div>
    <FooterHome></FooterHome>
</>
 );
};

export default Homepage;
