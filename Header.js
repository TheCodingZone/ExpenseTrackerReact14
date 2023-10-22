import classes from './Header.module.css';
import { authActions } from '../Store/index';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
const Header = () => {
  const isAuth=useSelector(state=>state.auth.isAuthenticated);
  const dispatch=useDispatch();
  const logoutHandler=(event)=>{
    event.preventDefault();
    dispatch(authActions.logout());

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
        
            <li>
            {
            isAuth &&
            <a href='/'>My Products</a>
}
             
            </li>
            <li>
          {
            isAuth && <a href='/'>My Sales</a>
          }
            
          </li>
          <li>
            {
              isAuth &&  <button onClick={logoutHandler}>Logout</button>
            }
           
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
