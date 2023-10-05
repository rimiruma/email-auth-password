import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case charactrs.')
            return;
        }



        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.')
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Registr</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 py-2 px-4" type="email" name="email" placeholder="Email Address" id="" required></input>
                    <br />
                    <div className="mb-4 relative">
                        <input className="w-3/4 py-2 px-4" type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="" required></input>
                        <span className="absolute top-3 right-1/4" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />
                   <div className="mb-2">
                   <input type="Checkbox" name="terms" id="terms"></input>
                    <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                   </div>
                    <br />
                    {/* <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register"></input> */}
                    <button className="btn btn-secondary mb-4 w-3/4" type="submit">Register</button>
                </form>
                {
                    registerError && <p className="text-red-800">{registerError}</p>
                }
                {
                    success && <p className="text-green-800">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;