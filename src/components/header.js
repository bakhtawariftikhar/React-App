import React from 'react';
import Nav from './Navbar';
const Header = () => {   
  return (
     
      <header>
      <Nav />
        <div className="head">
            <h1>Online Lawyer</h1>
            <div>
              <p>Hiring a lawyer is pretty expensive in Pakistan.So our mission is to provide AI-based lawyer series that can process textual queries and
answer  accordingly with citations to the PPC (Pakistan Penal Code) and
Constitution. This is especially useful for people living in remote areas and even
urban women looking to get a consultation privately.</p>
             

              </div>
            </div>
       
       
      </header>
      
    );
  }

export default Header;