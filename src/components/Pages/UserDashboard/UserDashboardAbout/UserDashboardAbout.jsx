import React from "react";

const UserDashboardAbout = () => {
  return (
    <section className="min-h-screen py-8">
      <div className="container">
        {/* Basic info  */}

        <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md">
          <h3 className="text-3xl font-medium text-[#0b1120] border-b-4 text-center mb-6">
            About
          </h3>
          <form action="">
            {/* state  */}
            <div className="w-full mb-3 ">
              <label
                for="state"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your State"
                required
              />
            </div>

            {/* country  */}
            <div className="w-full mb-3">
              <label
                for="country"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Country"
                required
              />
            </div>

            {/* Email  */}
            <div className="w-full mb-3">
              <label
                for="email"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Email"
                required
              />
            </div>

            {/* PHONE  */}
            <div className="w-full mb-3">
              <label
                for="phone"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="+880 000000000"
                required
              />
            </div>

            {/* Github  */}
            <div className="w-full mb-3">
              <label
                for="github"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Github Link
              </label>
              <input
                type="text"
                id="github"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your github Link"
              />
            </div>

            {/* LinkedIn  */}
            <div className="w-full mb-3">
              <label
                for="linkedin"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Linkedin Link
              </label>
              <input
                type="text"
                id="linkedin"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your github Link"
              />
            </div>

            {/* Facebook  */}
            <div className="w-full mb-3">
              <label
                for="facebook"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Facebook Link
              </label>
              <input
                type="text"
                id="facebook"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your github Link"
              />
            </div>

            {/* instagram  */}
            <div className="w-full mb-3">
              <label
                for="instagram"
                class="block mb-2 text-base font-medium text-gray-900 ml-1"
              >
                Instagram Link
              </label>
              <input
                type="text"
                id="instagram"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your github Link"
              />
            </div>

            {/* Submit button  */}
            <div className=" max-w-[30rem] mx-auto">
              <button
                type="submit"
                className="px-3 py-1 btn w-full text-lg font-medium rounded-lg outline-none duration-150 ease-in-out mt-3"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserDashboardAbout;