import React from "react";
import { Link } from "react-router-dom";


export default () => (
    <div style = {{
      backgroundColor:"#161616",
      width: "100vw",
      height: "100vh",
    }}>
      <img src="https://www.ibm.com/industries/resources/industry-city/assets/images/preloader-bee.png" className="IBM-bee" />
      <p className="IBM-name">IBM's</p>
      <p className="SkillHive-name">SkillHive</p>
      <div className="SignIn-Box">
        <p className="SignIn-Text">Sign In</p>
        <form>
      <label>
        <input type="email" name="email" placeholder=" Corporate Email" className="Email-box"/>
      </label>
      <label>
        <input type="password" name="password" placeholder=" Password" className="Password-box"/>
      </label>
      <Link to="/overview/index">
      <input type="submit" value="Continue" className="Continue-button"></input>
      </Link>
    </form>
      </div>
    </div>
  );