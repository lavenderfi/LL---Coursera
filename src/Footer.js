import Logo from './assets/Logo1.svg'

function Footer () {
return (
    <div className='footer'>
    <img src={Logo} alt='logo'/>
    <div className='links'>
   <div className='footer-items'>
    <h1>Navigation</h1>
            <ul> 
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#menu'>Menu</a>
                </li>
                <li>
                    <a href='#reserve'>Reservations</a>
                </li>
                <li>
                    <a href='#order'>Order Online</a>
                </li>
                <li>
                    <a href='#login'>Login</a>
                </li>
            </ul>
            </div>
   <div className='footer-items'>
    <h1>Contact</h1>
            <ul> 
                <li>
                    <a href='/'>Email</a>
                </li>
                <li>
                    <a href='#about'>Tel</a>
                </li>
                <li>
                    <a href='#menu'>Address</a>
                </li>
            </ul>
            </div>
   <div className='footer-items'>
    <h1>Socials</h1>
            <ul> 
                <li>
                    <a href='/'>Facebook</a>
                </li>
                <li>
                    <a href='#about'>Instagram</a>
                </li>
                <li>
                    <a href='#menu'>Twitter</a>
                </li>
                <li>
                    <a href='#reserve'>Tiktok</a>
                </li>
            </ul>
            </div>
            </div>
    </div>
)
}

export default Footer