import { Container } from 'react-bootstrap'
import { BrowserRouter  as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'


function App() {
  return (
    <Router>
        <Header/>
        <main className='py-3'>
            <Container>
                <Route path='/' component={HomeScreen} exact/>
                <Route path='/login' component={LoginScreen} />
                <Route path='/register' component={RegisterScreen} />
                <Route path='/profile' component={ProfileScreen} />
                <Route path='/product/:id' component={ProductScreen}/>
                <Route path='/product/delete/:id' component={ProductScreen} />
                <Route path='/admin/userlist' component={UserListScreen}/>
                <Route path='/admin/productlist' component={ProductListScreen}/>
                <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
            </Container>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
