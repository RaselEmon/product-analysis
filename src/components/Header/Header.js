import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsopen] = useState(false);

    return (
        <header className='md:h-14 py-2 px-4 bg-gradient-to-r from-gray-500 to-black border-b'>

            <nav className='md:flex md:justify-between md:items-center h-ful'>
                <div className='md:static md:w-auto w-full flex justify-between items-center font-bold text-white text-xl uppercase'>
                    <Link to='/'>Caps-Store</Link>

                    <p onClick={() => setIsopen(!isOpen)} className='md:hidden'>
                        {
                            isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBarsStaggered} />
                        }
                    </p>
                </div>
                <div className={`md:flex transition duration-700 ease-out ${!isOpen ? 'hidden' : 'visible'}`}>
                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4' to='/'>Home</Link>
                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4' to='/review'>Review</Link>
                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4' to='/dashboard'>Dashboard</Link>
                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4' to='/blogs'>Blogs</Link>
                    <Link className='md:inline-block block text-white font-medium md:my-0 my-3 md:mx-4' to='/about'>About</Link>

                </div>
            </nav>

        </header>
    );
};

export default Header;