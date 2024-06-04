import { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../public/Images/olx-logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../public/Signup.css";
import { FirebaseContext } from "../Store/FirebaseContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, password);
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created : ", user);

        const db = getFirestore(firebase);

        const userData = {
          id: userCredential.user.uid,
          username: name,
          email: email,
          phone: phone,
        };
        console.log("Working");

        setDoc(doc(db, "users", user.uid), userData)

        toast.success("User registered successfully", {
          closeButton: false,
          autoClose: 2000,
          hideProgressBar: true,
        });

        setTimeout(() => {
          navigate("/login");
        }, 2500);
      })
      .catch((error) => {
        toast.error("User already exists");
        console.log("Error creating user : ", error);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="signupParentDiv">
        <img width="150px" height="150px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="input"
            type="text"
            id="username"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
        </form>
        <div className="alreadyAccount">
        <p><Link to={"/login"}>Already have an account Login</Link></p>
        </div>
      </div>
    </>
  );
}
