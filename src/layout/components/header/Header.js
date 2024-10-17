;
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

    return (
        <div className='w-full h-[85px] z-10 flex items-center justify-center bg-white'>
            <Link className='w-max' href="/dashboard">
                <Image width={314} height={100} src='/assets/icons/logo.svg' alt='Logo' />
            </Link>
        </div>
    );
}

export default Header;
