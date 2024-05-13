import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import img from "../../assets/images/review/google.png";
import img2 from "../../assets/images/review/tweet.png";

function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showPass3, setShowPass3] = useState(false);
  const [showPass4, setShowPass4] = useState(false);

  return (
    <section className="account-section">
      <div className="tf-container">
        <div className="row">
          <Tabs className="wd-form-login tf-tab">
            <h4>Anmeldung</h4>
            <TabList className="menu-tab">
              <Tab className="ct-tab">Recruiter</Tab>
              <Tab className="ct-tab">Unternehmer</Tab>
            </TabList>
            <div className="content-tab">
              <TabPanel className="inner animation-tab">
                <form action="/recruiter">
                  <div className="ip">
                    <label>
                      Email Adresse <span>*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue=""
                        placeholder="marcus.mustermann@firmaa.de"
                    />
                  </div>
                  <div className="ip">
                    <label>
                      Passwort <span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                          type={`${showPass ? "text" : "password"}`}
                          className="input-form password-input"
                          defaultValue=""
                          placeholder="userabcdefg123!@"
                          required
                      />
                      <Link
                          className={`password-addon ${
                              showPass ? "icon-eye" : "icon-eye-off"
                          }`}
                          onClick={() => setShowPass(!showPass)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice">
                    <div className="sub-ip">
                      <input type="checkbox"/>
                      Erinnere mich
                    </div>
                    <Link to="#" className="forgot">
                      Passwort vergessen?
                    </Link>
                  </div>
                  <button type="submit">Anmelden</button>
                  <div className="sign-up">
                    Noch nicht registriert ? <Link to="/createaccount">Registrieren</Link>
                  </div>
                </form>
              </TabPanel>
              <TabPanel className="inner animation-tab">
                <form action="/">
                  <div className="ip">
                    <label>
                      Email Adresse <span>*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue=""
                        placeholder="marcus.mustermann@firmaa.de"
                    />
                  </div>
                  <div className="ip">
                    <label>
                      Passwort <span>*</span>
                    </label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input
                          type={`${showPass3 ? "text" : "password"}`}
                          className="input-form password-input"
                          defaultValue=""
                          placeholder="userabcdefg123!@"
                          required
                      />
                      <Link
                          className={`password-addon ${
                              showPass3 ? "icon-eye" : "icon-eye-off"
                          }`}
                          onClick={() => setShowPass3(!showPass3)}
                      />
                    </div>
                  </div>
                  <div className="group-ant-choice">
                    <div className="sub-ip">
                      <input type="checkbox"/>
                      Erinnere mich
                    </div>
                    <Link to="#" className="forgot">
                      Passwort vergessen?
                    </Link>
                  </div>
                  <button type="submit">Anmelden</button>
                  <div className="sign-up">
                    Noch nicht registriert ? <Link to="/createaccount">Registrieren</Link>
                  </div>
                </form>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
