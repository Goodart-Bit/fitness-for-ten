"use client";

import { faq } from "../constants";
import "./contact.css";
import { useState } from "react";
import toast from "react-hot-toast";

// receives: @question without (?)
// @answer
function QuestionSet({ question, answer }) {
  return (
    <div className="qa">
      <div className="question">
        <span className="accented">Q.</span>
        <p className="spaced">{question}</p>?
      </div>
      <div className="answer">
        <strong>A.</strong>
        <p dangerouslySetInnerHTML={{ __html: answer }} className="spaced"></p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("type", "contact");
    data.append("topic", formData.topic);
    const response = await fetch("/api/contact-inquiry", {
      method: "POST",
      body: data,
    });
    response.ok
      ? toast.success(
          "Your email has been sent successfully, we'll reach back in the following days case needed."
        )
      : toast.error(
          "There was an error while trying to send the email, please try again."
        );
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
      </div>

      <div>
        <input
          type="text"
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Topic of your inquiry"
          required
        />
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your question or request"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default function Contact() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="main-card sub-page">
      <h1 className="accented">FREQUENTLY ASKED QUESTIONS (FAQ)</h1>
      <div className={`faq ${expanded ? "expanded" : "collapsed"}`}>
        {faq.map((qa, idx) => {
          return (
            <QuestionSet
              key={`qa_${idx}`}
              question={qa.question}
              answer={qa.answer}
            />
          );
        })}
      </div>
      {expanded && (
        <div id="contact-gallery">
          <img src="/gallery/_CSS1236.jpg"></img>
          <div id="form-container">
            <div>
              <h1 className="accented">
                Need assistance or have an specific question not covered in the
                list above?
              </h1>
              <p>
                Send us a message, and we&apos;ll be in touch shortly! Please
                make sure you&apos;ve checked the FAQ section before reaching
                out, your question may have already been answered there.{" "}
                <strong>
                  This section is no designated for membership cancellations,
                  check the &apos;How do I cancel my membership?&apos; card above for more
                  information.{" "}
                </strong>
              </p>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
      )}
      {faq.length > 3 && (
        <button id="expand-faq" onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}
