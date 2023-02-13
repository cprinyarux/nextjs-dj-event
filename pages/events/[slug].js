/* eslint-disable jsx-a11y/alt-text */
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

export default function EventPage({ evt }) {
  const deleteEvent = e => {
    console.log("delete");
  };

  console.log(evt.attributes.image.data.attributes.formats.medium.url);

  return (
    <Layout>
      <div className={styles.event}>
        <div className="flex flex-row justify-end items-center space-x-4">
          <Link
            className="font-serif text-base"
            href={`/events/edit/${evt.id}`}
          >
            <div className="flex flex-row items-center justify-center p-3 space-x-3">
              <FaPencilAlt /> <span className="mx-3">Edit Event</span>
            </div>
          </Link>

          <a href="#" className="font-serif text-base" onClick={deleteEvent}>
            <div className="flex flex-row items-center justify-center p-3 space-x-3">
              <FaTimes /> <span className="mx-3">Delete Event </span>
            </div>
          </a>
        </div>

        <span className="text-sm font-serif mb-5">
          {/* {evt.attributes.date} at {evt.attributes.time} */}
          {new Date(evt.attributes.date).toLocaleDateString("en-US")} at{" "}
          {evt.attributes.time}
        </span>
        <h1 className="text-2xl font-serif font-bold">
          {evt.attributes.name}
        </h1>
        {evt.attributes.image.data &&
          <div className={styles.image}>
            <Image
              src={evt.attributes.image.data.attributes.formats.medium.url}
              width={960}
              height={600}
            />
          </div>}

        <h3 className="text-xl font-serif font-bold">Performers:</h3>
        <p className="text-base font-serif ">
          {evt.attributes.performers}
        </p>
        <h3 className="text-xl font-serif font-bold">Description:</h3>
        <p className="text-base font-serif ">
          {evt.attributes.description}
        </p>
        <h3 className="text-xl font-serif font-bold">
          Venue: {evt.attributes.venue}
        </h3>
        <p className="text-base font-serif ">
          {evt.attributes.address}
        </p>

        <Link className={styles.back} href="/events">
          <button className="btn">
            {" "}{"<"} Go Back
          </button>
        </Link>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths({ slug }) {
//   const res = await fetch(`${API_URL}/api/events?populate=*`);
//   const events = await res.json();
//   // console.log(events);
//   const paths = events.data.map(evt => ({
//     params: { slug: evt.slug }
//   }));

//   return {
//     paths,
//     fallback: true
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const url = `${API_URL}/api/events?filters[slug]=${slug}&populate=*`;
//   const events = await res.json();
//   console.log(`Events Data return: ${events.data}`);
//   return {
//     props: {
//       evt: events.data[0]
//     },
//     revalidate: 1
//   };

export async function getServerSideProps({ params: { slug } }) {
  const url = `${API_URL}/api/events?filters[slug]=${slug}&populate=*`;
  //console.log(url);
  const res = await fetch(url);
  const events = await res.json();
  // console.log(events);
  return {
    props: {
      evt: events.data[0]
    }
  };
}
