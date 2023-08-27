import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/d_logo.jpg';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='website-logo'>
        <Image src={logo} width={100} height={100} alt='website logo' />
      </div>

      <div className='header__auth-btns'>
        <Link href='/' className='btn btn-light-blue header__auth-btns__login'>
          Login
        </Link>
        <Link
          href='/signup'
          className='btn btn-light-blue-invert header__auth-btns__signup'>
          Signup
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
