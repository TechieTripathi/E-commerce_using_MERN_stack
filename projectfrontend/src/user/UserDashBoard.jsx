import React from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const UserDashBoard = () => {

  const { user:{name, email} } = isAuthenticated();

  const adminLeftSide = () => {
    return(
      <div className='card'>
        <h4 className='card-header bg-dark text-white px-1 text-center'>User Navigation</h4>
        <ul className="list-group">
          
          <li className="list-group-item">
            <Link to= "/user/orders" className="nav-link text-success"> Past Orders </Link>
          </li>
        </ul>
      </div>
    )
  }
  
  const adminRightSide = () => {
  return(
    <div className="card mb-4">
      <h4 className="card-header">User Information</h4>
      <ul className="list-group">
        <li className="list-group-item">
         <span className="badge badge-info mr-2">Name:</span> {name}
        </li>
        <li className="list-group-item">
         <span className="badge badge-info mr-2">E-mail:</span> {email}
        </li>
        <li className="list-group-item">
         <span className="badge badge-danger mr-2">User Area</span> 
        </li>
      </ul>
    </div>  
  )
  }
  return (
    <Base title="User DashBoard" 
    description="User's actions will be done here"
    className='container bg-info p-5'
    >
        <div className="row">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>

    </Base>
  )
}

export default UserDashBoard; 