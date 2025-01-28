//style

import './Navbar.css'


function Navbar({userLength}) {
  return (
    <div className='navbar'>
        <div className="navbar-container container">
            <h1 className='navbar-logo'>CUser.</h1>
            <h2 className="navbar-counter">
                {userLength > 0 ? 'You have ' + userLength : 'No user'}
            </h2>
        </div>
    </div>
  )
}

export default Navbar