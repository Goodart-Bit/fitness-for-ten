"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import "./careers.css";

export default function Careers() {
  function ContactForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      letter: "",
      message: "",
    });

    const inputs = [
      { name: "name", placeholder: "Your name", type: "text" },
      { name: "email", placeholder: "Your email", type: "text" },
      {
        name: "letter",
        type: "file",
      },
      {
        name: "message",
        placeholder: "Leave a message (optional)",
        optional: true,
        type: "textarea",
      },
    ];

    const handleFileChange = (e) => {
      setFormData({
        ...formData,
        letter: e.target.files[0], // or e.target.files if you allow multiple
      });
      console.log(e.target.files[0]);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("type", "jobApplication");
      data.append("letter", formData.letter);
      const response = await fetch("/api/contact-inquiry", {
        method: "POST",
        body: data,
      });
      response.ok
        ? toast.success(
            `Thank you ${
              formData.name.split(" ")[0]
            }! we'll review your application and reach back in case needed.`
          )
        : toast.error(
            "There was an error while trying to send the email, please try again."
          );
    };

    return (
      <form onSubmit={handleSubmit} className="contact-form">
        {inputs.map((input, index) => {
          return (
            <div key={`donate-${index}`}>
              {input.type == "file" && (
                <label
                  htmlFor="file-upload"
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    color: "#fff",
                    borderRadius: "4px",
                  }}
                >
                  Upload your resume:
                </label>
              )}
              {input.type == "textarea" ? (
                <textarea
                  name={input.name}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  required={!input.optional}
                />
              ) : (
                <input
                  type={`${input.type}`}
                  name={input.name}
                  onChange={
                    input.type == "file" ? handleFileChange : handleChange
                  }
                  placeholder={input.placeholder}
                  required={!input.optional}
                  accept={
                    input.type == "file" && ".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  }
                />
              )}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div>
      <div className="main-card sub-page">
        <h1 className="accented">WORK WITH US</h1>
        <p>
          We’re looking for friendly, motivated people to help us create a great
          experience for our members. Apply to our team by filling out the
          following form. {" "}
          <strong>
            Note that this section is no designated for membership
            cancellations, for that more information on that please refer to our
            F.A.Q. in the contact us page.
          </strong>
        </p>
        <div id="form-container" class="career">
          <h1 className="accented-2">SUBMIT YOUR RESUME</h1>
          <div>
            <img src="/gallery/_CSS_CAREERS.jpg"></img>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}
