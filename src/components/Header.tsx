export default function Header() {
  return (
    <header className='bg-purple-800 min-h-[60px] transition-all flex items-center duration-500'>
      <div className='wrapper flex justify-between items-center'>
        <a href='/' className='flex items-center text-white'>
          <h1 className='text-3xl text-white scale-[0.99] hover:scale-100 transition'>
            Impact<span className='text-red-400'>.</span>
          </h1>
        </a>
        <nav className='hidden lg:block'>
          <ul className='flex items-center'>
            {[
              { link: '#home', name: 'Home' },
              { link: '#about', name: 'About' },
              { link: '#portfolio', name: 'Portfolio' },
              { link: '#team', name: 'Team' },
              { link: '#contact', name: 'Contact' },
            ].map(({ link, name }) => (
              <li className='whitespace-nowrap xl:relative'>
                <a
                  key={link}
                  href={link}
                  className='pt-1.5 mx-[14px] dash color'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='mobile-toggler lg:hidden'>
          <i>list</i>
          <i>x</i>
        </div>
      </div>
    </header>
  );
}
