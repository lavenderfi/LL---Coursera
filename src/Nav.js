import Logo from './assets/Logo.svg'

function Nav () {
    return (
        <div className='nav'>
            <img src={Logo} alt='logo'/>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='/menu'>Menu</a>
                </li>
                <li>
                    <a href='/reserve'>Reservations</a>
                </li>
                <li>
                    <a href='/order'>Order Online</a>
                </li>
                <li>
                    <a href='/login'>Login</a>
                </li>
            </ul>
        </div>
    )
}
export default Nav