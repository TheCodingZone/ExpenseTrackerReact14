import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from '../src/components/Auth'
import Header from '../src/components/Header'
import UserProfile from '../src/components/UserProfile'
import { authActions } from './Store/index';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
function App() {
  const isAuth=useSelector(state=>state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header></Header>
      {
        isAuth &&
        <UserProfile/>
      }
<Auth/>
{

}
    </Fragment>
    // <Counter />
  );
}

export default App;
