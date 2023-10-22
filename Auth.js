import classes from './Auth.module.css';
import { authActions } from '../Store/index';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
const Auth = () => {
  const isAuth=useSelector(state=>state.auth.isAuthenticated);
  const dispatch=useDispatch();
  const loginHandler=(event)=>{
    event.preventDefault();
     dispatch(authActions.login())
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
