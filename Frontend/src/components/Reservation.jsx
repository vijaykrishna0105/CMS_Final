import React, { useState } from "react";
import axios from "axios";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [policyName, setPolicyName] = useState(""); // Added state for policyName
  const [claimAmount, setClaimAmount] = useState(""); // Added state for claimAmount
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      // Validate phone number (ensure it's a string with 10 digits)
      if (phone.length !== 10 || isNaN(phone)) {
        throw new Error("Phone number must contain exactly 10 digits.");
      }

      const formData = {
        firstName,
        lastName,
        email,
        phone,
        policyName,
        claimAmount: parseFloat(claimAmount), // Convert claimAmount to a number
        date,
        time,
      };

      const { data } = await axios.post(
        "http://localhost:4000/api/v1/claim/send",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Optional, if using cookies for session management
        }
      );

      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setPolicyName(""); // Reset policyName
      setClaimAmount(""); // Reset claimAmount
      navigate("/success"); // Redirect to success page
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to submit claim. Please try again later.");
      }
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/claims_reservation_image.jpg" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A CLAIM</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Policy Name"
                  value={policyName}
                  onChange={(e) => setPolicyName(e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Claim Amount"
                  value={claimAmount}
                  onChange={(e) => setClaimAmount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                CLAIM NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
