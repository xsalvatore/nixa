import { connect } from 'react-redux';
import { logInUser } from '../redux/actions/userActions';

const SignInForm = ({ user, logInUser }) => {
    return (
        <div className='sign-in-form-container'>
           <div className="sign-in-form">
               <h1>Sign into your account</h1>
               
               <form>
                   <input type="text" />
                   <input type="password" />
                   
                   <div className="input-group">
                       <input type="checkbox" defaultChecked />
                       <span>Keep me signed in</span>
                   </div>
               </form>

               <button onClick={logInUser}>Sign in</button>

               {/* eslint-disable-next-line */}
               <a href="">Forgot your password?</a>
           </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logInUser: () => dispatch(logInUser()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);