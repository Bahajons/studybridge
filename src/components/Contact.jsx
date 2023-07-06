import React, { useState } from "react";

export default function Contact() {
  const [error, setError] = useState();
  const [user, setUser] = useState({
    form_name: "",
    form_email: "",
    form_telegram: "",
    form_message: "",
  });
  function validate() {
    console.log("dsds");
    let err = {},
      t = true;
    if (!user.form_name) {
      t = false;
      err = { ...err, form_name: true };
    }
    if (!user.form_email) {
      t = false;
      err = { ...err, form_email: true };
    }
    if (!user.form_telegram) {
      t = false;
      err = { ...err, form_telegram: true };
    }
    if (!user.form_message) {
      t = false;
      err = { ...err, form_message: true };
    }
    if (t) {
      send_email();
    }
    setError(err);
  }

  function onChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  async function send_email() {
    console.log("axios");

    const data = {
      Full_name_site: user.form_name,
      Email_site: user.form_email,
      Telegram_number: user.form_telegram,
      Message: user.form_message,
    };

    // Add one line to the sheet
    fetch(
      "https://sheet.best/api/sheets/025beed8-5ecb-4c80-ad99-eeefe7ffa384",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
        // setSent(false);
        setUser({
          ...user,
          form_name: "",
          form_email: "",
          form_telegram: "",
          form_message: "",
        });
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  }

  return (
    <div>
			<h5 className="text-center text-success"><i>Thank you for choosing us. We will contact you soon</i></h5>
      <form className="form" id="contact-form" onSubmit={validate}>
        <div className="messages"></div>
        <div className="controls">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                  onChange={onChange}
                  value={user.form_name}
                />
                {error?.form_name ? (
                  <i style={{ color: "red", fontSize: "14px" }}>
                    Input your name
                  </i>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                  onChange={onChange}
                  value={user.form_email}
                />
                {error?.form_email ? (
                  <i style={{ color: "red", fontSize: "14px" }}>
                    Input your email
                  </i>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  id="form_telegram"
                  type="text"
                  name="subject"
                  placeholder="Telegram number"
                  onChange={onChange}
                  value={user.form_telegram}
                />
                {error?.form_telegram ? (
                  <i style={{ color: "red", fontSize: "14px" }}>
                    Input your telegram number
                  </i>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                {console.log(error)}
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                  onChange={onChange}
                  value={user.form_message}
                ></textarea>
                {error?.form_message ? (
                  <i style={{ color: "red", fontSize: "14px" }}>
                    Input your message
                  </i>
                ) : (
                  ""
                )}
              </div>
            </div>
            {console.log(user)}
            <div className="col-md-12">
              <button type="submit" className="butn butn-bg">
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
