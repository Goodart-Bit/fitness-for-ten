"use client";

import "./community.css";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CommunityInvolvement() {
  const beneficiaries = [
    "Prince Albert Raiders",
    "Prince Albert SPCA",
    "St. Mary's High School",
    "Boreal Healthcare Foundation",
    "Mount St. Joseph",
    "Ranch Ehrlo",
    "Children's Haven",
    "Kids Sport Prince Albert",
    "École des Petites",
    "Sunset Music Festival",
  ];

  function ContactForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      donation: "",
      message: "",
    });
    const inputs = [
      { name: "name", placeholder: "Your name" },
      { name: "email", placeholder: "Your email" },
      {
        name: "message",
        placeholder:
          "Please attach all the details regarding your request here",
        optional: true,
        text: true,
      },
      {
        name: "donation",
        placeholder: "Are you an actual member?",
        type: "checkbox",
      },
    ];

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
      data.append("type", "donation");
      data.append("donation", formData.donation);
      const response = await fetch("/api/contact-inquiry", {
        method: "POST",
        body: data,
      });
      response.ok
        ? toast.success(
            `Thank you ${
              formData.name.split(" ")[0]
            }! we'll reach back over email in the following days to proceed with your donation.`
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
              {input.type == "checkbox" && <p>Are you a current member?</p>}
              {input.text ? (
                <textarea
                  name={input.name}
                  value={formData[`${input.name}`]}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  required={!input.optional}
                />
              ) : (
                <input
                  type={input.type === "checkbox" ? "checkbox" : "text"}
                  name={input.name}
                  {...(input.type === "checkbox"
                    ? { checked: formData[input.name] || false }
                    : { value: formData[input.name] || "" })}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  required={!input.optional}
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
    <div className="main-card sub-page">
      <h1 className="accented">WELCOME TO OUR COMMUNITY INVOLVEMENT</h1>
      <div className="letter">
        <p>Beloved community,</p>
        <p>
          We have added a donation/sponsorship tab on our website! As we
          mentioned in both our mission and vision for our facility we&apos;d
          like to help everywhere we can! We have been so blessed so far to have
          worked with the following local charities, teams, organizations and
          causes.
        </p>
        <ul>
          {beneficiaries.map((benef, index) => (
            <li key={`${index}`}>{benef}</li>
          ))}
        </ul>
        <p>
          We would love the opportunity to work with you! Please fill out the
          information box below. Provide us with all the information you have
          and we will get back to you if the event meets our criteria! Please
          keep in mind that we are a small locally owned business. All requests
          will be carefully reviewed and we will try our best to work with
          everyone!
        </p>
        <div>
          <p>Thanks,</p>
          <p>Fitness for 10 🫶</p>
        </div>
      </div>
      <div id="form-container">
        <div>
          <h1 className="accented">DONATION REQUEST FORM</h1>
          <p>
            Please send us all the information regarding your request.
            <strong>
              {" "}
              Note that this section is not designated for membership
              cancellations. For cancellations please refer to our contact us
              section.
            </strong>
          </p>
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
