import { data } from "../rest_api.json";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentails: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setPhone(0);
      setTime("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="email_tag"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  value={phone}
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  placeholder="date"
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  value={time}
                  placeholder="Time"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
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
}
