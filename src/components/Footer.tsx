export default function Footer() {
  return (
    <footer>
      <div className='wrapper'>
        <div className='footer-content flex flex-wrap items-start justify-center lg:justify-between pt-[50px] pb-6'>
          <div className='px-3 pt-6 w-auto lg:w-[41%]'>
            <span className='pb-4 block'>
              <a
                className='text-2xl font-bold text-white hover:underline-offset-8'
                href='/'
              >
                Mugafrey Investment
              </a>
            </span>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className='social-links mt-4 flex'>
              <a href='#'>
                <i>fb</i>
              </a>
              <a href='#'>
                <i>tw</i>
              </a>
              <a href='#'>
                <i>ig</i>
              </a>
              <a href='#'>
                <i>li</i>
              </a>
            </div>
          </div>
          <div className='px-3 pt-6 pb-7 w-1/2 lg:w-[16%]'>
            <h4 className='pb-3 text-lg'>Useful Links</h4>
            <ul>
              <li>
                <a href='#' className='dash white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='dash white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='dash white'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='dash white'>
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href='#' className='dash white'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className='px-3 pt-6 pb-7w-1/2 lg:w-[16%]'>
            <h4 className='pb-3 text-lg'>Our Services</h4>
            <ul>
              <li>
                <span className='text-[rgba(255,255,255,0.7)] hover:text-white transition-colors duration-300'>
                  Service One
                </span>
              </li>
              <li>
                <span className='text-[rgba(255,255,255,0.7)] hover:text-white transition-colors duration-300'>
                  Service Two
                </span>
              </li>
              <li>
                <span className='text-[rgba(255,255,255,0.7)] hover:text-white transition-colors duration-300'>
                  Service Three
                </span>
              </li>
              <li>
                <span className='text-[rgba(255,255,255,0.7)] hover:text-white transition-colors duration-300'>
                  Service Four
                </span>
              </li>
              <li>
                <span className='text-[rgba(255,255,255,0.7)] hover:text-white transition-colors duration-300'>
                  Service Five
                </span>
              </li>
            </ul>
          </div>
          <div className='px-3 pt-6 w-auto lg:w-1/4'>
            <h4 className='pb-3 text-lg'>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong>
              <a href='tel:+1 5589 55488 55'> +1 5589 55488 55</a>
              <br />
              <strong>Email:</strong>{' '}
              <a href='mailto:info@example.com'>info@example.com</a>
              <br />
            </p>
          </div>
        </div>

        <div className='my-5 credits text-center'>
          <p className='capitalize'>
            Copyright © {new Date().getFullYear()}{' '}
            <span className='font-bold'>Mugafrey Investment.</span> All right
            reserved.
          </p>
          <p className='pt-1.5'>
            Designed with 💖 by{' '}
            <a
              className='font-bold dash white'
              href='mailto:dumanimedia@gmail.com'
            >
              DumaniMedia.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
