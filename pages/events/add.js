import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { API_URL } from "@/config";
import styles from "@/styles/Form.module.css";

export default function AddEventPage() {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    date: "",
    time: "",
    description: ""
  });

  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log(values);
    // Validation

    const hasEmptyFields = Object.values(values).some(
      element => element === ""
    );
    if (hasEmptyFields) {
      // console.log("Please fill in all fields");
      toast.error("Please fill in all field");
    }
    const newEvent = JSON.stringify(values);
    const postBody = { values };
    // const transformBody = JSON.stringify(values);
    console.log(postBody);
    const res = await fetch(`${API_URL}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: postBody
    });

    if (!res.ok) {
      toast.error("Something Went Wrong Post Method");
    } else {
      const evt = await res.json();
      // router.push(`/events/${evt.slug}`);
    }
  };
  const handleInputChange = e => {
    // console.log(e);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <Layout title="Add New Event">
        <ToastContainer />
        <div className="mt-5 mb-10">
          <Link href="/events">
            <button className="btn">Go Back</button>
          </Link>
          <h1 className="mt-10 text-3xl font-serif font-extrabold">
            Add New Event
          </h1>
        </div>

        {/* <div className="container w-auto bg-slate-200"> */}
        <form onSubmit={handleSubmit}>
          <div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
            {/* <form class="px-8 pt-6 pb-8 mb-4 bg-slate-100 rounded"> */}
            {/* Name and Venue */}
            <div class="mb-4  md:flex md:justify-between">
              {/* Name */}
              <div class="  w-1/2 mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </div>
              <div class="md:ml-2  w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="venue"
                >
                  Venue
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="venue"
                  type="text"
                  placeholder="Venue"
                  name="venue"
                  value={values.venue}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Date and Time Performer */}
            <div class="mb-4  w-full md:flex md:justify-between">
              {/* Date  and Time*/}
              <div className="flex flex-row justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="date"
                  >
                    Date
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={values.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div class="mb-4 md:mr-2 md:ml-5 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="time"
                  >
                    Time
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="time"
                    type="text"
                    placeholder="time"
                    name="time"
                    value={values.time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="w-1/2 md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="performers"
                >
                  Performers
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="performers"
                  type="text"
                  placeholder="Performers"
                  name="performers"
                  value={values.performers}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="address"
              >
                Address
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="description"
              >
                Description
              </label>
              <textarea
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-1/4 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
                value="Add Event"
              >
                Save
              </button>
            </div>
            <hr class="mb-6 border-t" />
            {/* </form> */}
          </div>
        </form>
      </Layout>
    </div>
  );
}
