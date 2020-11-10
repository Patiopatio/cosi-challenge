import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import Input from "../components/atoms/input";
import Spinner from "../components/atoms/spinner";

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("austria");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [birthPlace, setBirthPlace] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [passportIssueDate, setPassportIssueDate] = useState(new Date());
  const [passportExpiryDate, setPassportExpiryDate] = useState(new Date());
  const [passportIssueCountry, setPassportIssueCountry] = useState("");
  const [passportIssueCity, setPassportIssueCity] = useState("");

  const [isTAndCAccepted, setIsTAndCAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);

  const onSubmit = async () => {
    if (isReviewed) {
      try {
        setLoading(true);
        const response = await axios.post("/api/passenger/checkin", {
          firstName,
          lastName,
          nationality,
          email,
          phoneNumber,
          passportNumber,
          birthDate,
          birthPlace,
          country,
          city,
          address,
          passportIssueDate,
          passportExpiryDate,
          passportIssueCountry,
          passportIssueCity,
          isTAndCAccepted,
        });
        setLoading(false);
        router.push("confirmation");
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }
    window.scrollTo(0, 0);
    setIsReviewed(true);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios("/api/passenger");
        setLastName(response.data.passenger.lastName);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const headline = isReviewed
    ? "Please review your information"
    : `Hi Mr. ${lastName}!`;

  return (
    <main className="container m-auto h-full py-2 px-4 md:px-16 w-full md:w-2/3">
      <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-4 text-xl md:text-2xl">{headline}</h1>
        <div className="flex flex-col md:flex-row md:space-x-2">
          <div className="flex-1">
            <Input
              name="firstName"
              className="mb-2"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="First name"
            />
            <Input
              name="lastName"
              className="mb-2"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Last name"
            />
            <div className="relative mb-2">
              <select
                onChange={(event) => setNationality(event.target.value)}
                value={nationality}
                className=" block appearance-none w-full bg-white hover:border-gray-500 px-3 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="austria">Austria</option>
                <option value="belgium">Belgium</option>
                <option value="france">France</option>
                <option value="greece">Greece</option>
                <option value="spain">Spain</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <Input
              name="Email"
              className="mb-2"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <Input
              name="phoneNumber"
              className="mb-2"
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              placeholder="Phone Number"
            />
            {(nationality === "france" || nationality == "belgium") && (
              <div className="mt-2">
                <label className="text-sm text-gray-600">
                  Birth date
                  <Input
                    name="birthDate"
                    className="mb-2"
                    type="date"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                    placeholder="Birth Date"
                  />
                </label>
              </div>
            )}
            {nationality === "france" && (
              <Input
                name="birthPlace"
                className="mb-2"
                type="text"
                value={birthPlace}
                onChange={(event) => setBirthPlace(event.target.value)}
                placeholder="Birth Place"
              />
            )}
          </div>
          <div className="flex-1">
            {(nationality === "austria" ||
              nationality == "belgium" ||
              nationality == "france") && (
              <Input
                name="country"
                className="mb-2"
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                placeholder="Country of residence"
              />
            )}
            {(nationality === "austria" ||
              nationality == "belgium" ||
              nationality == "spain" ||
              nationality == "france") && (
              <>
                <Input
                  name="city"
                  className="mb-2"
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  placeholder="City of residence"
                />
              </>
            )}
            {(nationality === "spain" || nationality == "belgium") && (
              <>
                <Input
                  name="address"
                  className="mb-2"
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Street name, house no"
                />
              </>
            )}
            {nationality === "greece" && (
              <>
                <label className="text-sm text-gray-600">
                  Passport Issue Date
                  <Input
                    name="passportIssueDate"
                    type="date"
                    value={passportIssueDate}
                    onChange={(event) =>
                      setPassportIssueDate(event.target.value)
                    }
                    placeholder="Passport date of issue"
                  />
                </label>
                <Input
                  name="passportIssueCountry"
                  className="mt-2 mb-2"
                  type="text"
                  value={passportIssueCountry}
                  onChange={(event) =>
                    setPassportIssueCountry(event.target.value)
                  }
                  placeholder="Passport country of issue"
                />
              </>
            )}
            {nationality === "austria" ||
              (nationality == "greece" && (
                <>
                  <Input
                    name="passportIssueCity"
                    className="mb-2"
                    type="text"
                    value={passportIssueCity}
                    onChange={(event) =>
                      setPassportIssueCity(event.target.value)
                    }
                    placeholder="Passport city of issue"
                  />
                </>
              ))}
            <Input
              name="passportNumber"
              className="mb-2"
              type="text"
              value={passportNumber}
              onChange={(event) => setPassportNumber(event.target.value)}
              placeholder="Passport Number"
            />
            {(nationality === "austria" || nationality == "greece") && (
              <>
                <label className="text-sm text-gray-600">
                  Passport Expiry Date
                  <Input
                    name="passportExpiryDate"
                    className="mb-2"
                    type="date"
                    value={passportExpiryDate}
                    onChange={(event) =>
                      setPassportExpiryDate(event.target.value)
                    }
                    placeholder="Passport expiry date"
                  />
                </label>
              </>
            )}
          </div>
        </div>
        {!isReviewed && (
          <label>
            <input
              type="checkbox"
              className="mr-2 mb-2"
              checked={isTAndCAccepted}
              onChange={(e) => setIsTAndCAccepted(e.target.checked)}
            />
            Accept T&C
          </label>
        )}
        <button
          type="submit"
          className="w-full flex justify-between mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          {!isReviewed ? "Continue" : "Check-In"}
          {loading && <Spinner />}
        </button>
      </form>
    </main>
  );
}
