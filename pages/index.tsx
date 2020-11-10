import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { signin } from "../store/index.js";
import Spinner from "../components/atoms/spinner";
import Input from "../components/atoms/input";

const mapStateToProps = (state) => ({
  flightNumber: state.flightNumber,
});

const mapDispatchToProps = {
  signin: signin,
};

const Home = ({ signin }) => {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const [flightNumber, setFlightNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/passenger", {
        flightNumber,
        lastName,
      });
      signin({ flightNumber, lastName });

      router.push("checkin");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <main className="container m-auto h-full px-4 md:px-16 w-full md:w-1/2">
      <form
        className="h-full flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-xl md:text-2xl">
          Welcome to your web check-in
        </h1>
        <div className="mb-2">
          <Input
            name="flightNumber"
            placeholder="Flight #"
            value={flightNumber}
            onChange={(event) => setFlightNumber(event.target.value)}
            register={register({
              required: {
                value: true,
                message: "Please enter your flight number",
              },
              minLength: {
                value: 6,
                message: "Your flight number must be at least 6 characters",
              },
            })}
          />
          {errors.flightNumber && (
            <div className="text-red-500">{errors.flightNumber.message}</div>
          )}
        </div>
        <Input
          type="text"
          value={lastName}
          name="lastName"
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Last name"
          register={register({
            required: {
              value: true,
              message: "Please enter your last name",
            },
          })}
        />
        {errors.lastName && (
          <div className="text-red-500">{errors.lastName.message}</div>
        )}
        <button
          type="submit"
          className="flex justify-between mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          Search flight
          {loading && <Spinner />}
        </button>
      </form>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
