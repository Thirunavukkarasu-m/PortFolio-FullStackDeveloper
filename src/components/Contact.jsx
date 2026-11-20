import { useState } from "react";
import emailjs from "@emailjs/browser";

import { EMAIL, PHONE, LOCATION, GITHUB_PROFILE, LINKEDIN } from "../config";

import Reveal from "../Reveal";

function Field({ k, label, area, v, err, onChange }) {
  const P = area ? "textarea" : "input";

  return (
    <div className="mb-3">
      <label htmlFor={k} className="form-label small">
        {label}
      </label>

      <P
        id={k}
        name={k}
        className="form-control fc"
        rows={area ? 4 : undefined}
        type={k === "email" ? "email" : "text"}
        value={v}
        onChange={onChange}
        aria-invalid={!!err}
        aria-describedby={err ? k + "-e" : undefined}
      />

      {err && (
        <div id={k + "-e"} className="text-danger small mt-1">
          {err}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [v, setV] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [err, setErr] = useState({});
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  // EmailJS Submit Function
  const submit = (e) => {
    e.preventDefault();

    const x = {};

    if (v.name.trim().length < 2) {
      x.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      x.email = "Please enter a valid email.";
    }

    if (v.message.trim().length < 10) {
      x.message = "Message should be at least 10 characters.";
    }

    setErr(x);

    if (Object.keys(x).length > 0) {
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_s2dp3io",
        "template_6m0c31o",
        {
          name: v.name,
          email: v.email,
          message: v.message,
        },
        {
          publicKey: "5JsIW8IcKKxX48UeK",
        },
      )
      .then(() => {
        alert("Message sent successfully!");

        setV({
          name: "",
          email: "",
          message: "",
        });

        setSending(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");

        setSending(false);
      });
  };

  return (
    <section id="contact" className="sec alt">
      <div className="container">
        <Reveal>
          <h2 className="sec-title">Let's Build Something Together</h2>

          <p className="text-muted">
            Looking for a frontend or Python full stack opportunity where I can
            contribute, learn and build meaningful applications.
          </p>
        </Reveal>

        <div className="row g-4 mt-1">
          <Reveal anim="fade-right" className="col-lg-5">
            <div className="card-x h-100">
              <p className="mb-2">
                <b>Location</b>
                <br />
                {LOCATION}
              </p>

              <p className="mb-2">
                <b>Phone</b>
                <br />

                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              </p>

              <p className="mb-3">
                <b>Email</b>
                <br />

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {EMAIL}
                </a>
              </p>

              <div className="d-flex gap-2">
                <a
                  className="btn-ghost sm"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  className="btn-ghost sm"
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal anim="fade-left" className="col-lg-7">
            <form className="card-x" onSubmit={submit} noValidate>
              <Field
                k="name"
                label="Name"
                v={v.name}
                err={err.name}
                onChange={set("name")}
              />

              <Field
                k="email"
                label="Email"
                v={v.email}
                err={err.email}
                onChange={set("email")}
              />

              <Field
                k="message"
                label="Message"
                area
                v={v.message}
                err={err.message}
                onChange={set("message")}
              />

              <button className="btn-accent" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>

              <p className="text-muted small mt-2 mb-0">
                Your message will be sent directly through EmailJS.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
