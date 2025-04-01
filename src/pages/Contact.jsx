import React from "react";

const Contact = () => {
  return (
    <div className="container my-20">
      <h1 className="text-4xl montbold mb-10">Contact</h1>
      <form action="" method="POST" className="w-1/2 grid grid-cols-2 gap-4">
        <input
          required
          className="bg-white/50 montmed rounded-lg px-5 py-3"
          placeholder="Firs Name"
          type="text"
          name="text"
          id="0"
        />
        <input
          required
          className="bg-white/50 montmed rounded-lg px-5 py-3"
          placeholder="Last Name"
          type="text"
          name="text"
          id="1"
        />
        <input
          required
          className="bg-white/50 montmed rounded-lg px-5 py-3 col-start-1 col-end-3"
          placeholder="Email"
          type="email"
          name="email"
          id="2"
        />
        <textarea
          className="h-52 bg-white/50 montmed rounded-lg p-5 resize-none col-start-1 col-end-3"
          placeholder="Enter Your Request ..."
          name="xabar nima haqida"
          id="3"
        ></textarea>
        <button className="montbold text-lg px-5 py-3 rounded-lg bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
