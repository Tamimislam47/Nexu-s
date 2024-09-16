import React from "react";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex min-h-[65vh] w-1/4 flex-col justify-around border-[5px]">
        <h1 className="p-4 text-5xl font-semibold">Login</h1>
        <form
          className="flex w-full flex-col gap-5 p-4"
          onSubmit={handleSubmit}
        >
          <label>
            <p>Email:</p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label>
            <p className="float-left">Password:</p>
            <p className="float-right text-blue-700 underline hover:cursor-pointer">
              Forget Password
            </p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>

          <button
            type="submit"
            className="btn btn-xs w-full bg-[#FEBD69] hover:btn-outline sm:btn-sm md:btn-md lg:btn-lg"
          >
            Login
          </button>
        </form>
        <div className="flex w-full flex-col justify-center gap-3 p-4">
          <p className="text-center">
            New to Nexu'<span className="text-customColor">s</span>
          </p>
          <button
            type="button"
            className="btn btn-xs w-full bg-[#FEBD69] hover:btn-outline sm:btn-sm md:btn-md lg:btn-lg"
          >
            I am a new customer
          </button>
          <p>
            By singing in you are agreeing to our{" "}
            <span className="text-customColor">Conditions of Use and Sale</span>{" "}
            and out <span className="text-customColor">Privacy Notice</span>
          </p>
        </div>
      </div>
    </div>
  );
}
