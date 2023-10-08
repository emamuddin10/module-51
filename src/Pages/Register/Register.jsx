import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthProviders, { AuthContext } from "../../Provider/AuthProviders";

const Register = () => {

  const {createUser, signInWithGoogle} = useContext(AuthContext)
  // console.log(createUser)

    const handlerForm = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const  email = e.target.email.value;
        const password = e.target.password.value
        // console.log(email,password,name)
    
        //  create user in firebase
        createUser(email,password)
        .then(result =>{
          console.log(result.user)
          alert('successfully Register')
          e.target.reset()
        })
        .catch(error=>{
          console.log(error)
        })
    }


    const handleGoogle = ()=>{
        signInWithGoogle()
        .then(result => {console.log(result)})
        .catch(error=>{
          console.log(error)
        })
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
              <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <form onSubmit={handlerForm}>
                 <div className="card-body">
                 <div>
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="name" placeholder="enter your name" name='name' className="input input-bordered" />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="password" name='password' className="input input-bordered" />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                      <button className="btn btn-ghost" onClick={handleGoogle}>Google</button>
                      <p><NavLink to="/login" >you have already our user <a className="text-blue">login</a></NavLink></p>
                    </div>
                  </div>
                   
                 </form>
                </div>
              </div>
       </div>
    );
 
 
  }

export default Register;