import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import EventItem from "@/components/EventItem";

import qs from "qs";
export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Result for ">
      <h1 className="text-3xl font-poppins font-bold">
        {" "}Search Results for {router.query.term}
      </h1>
      {events.length === 0 && <h3> No events to show</h3>}
      {events.map(evt => <EventItem key={evt.id} evt={evt} />)}
      <Link href="/events">
        <button className="btn">
          {" "}{"<"} Go Back
        </button>
      </Link>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify(
    {
      "filters[$or]": [
        { "name][$contains": term },
        { "performers][$contains": term },
        { "description][$contains": term },
        { "venue][$contains": term }
      ]
    },
    { encode: false }
  );

  const url = `${API_URL}/api/events?${query}&populate=*`;
  console.log(url);
  const res = await fetch(
    // `${API_URL}/api/events?filters[name][$contains]=${term}&populate=*`
    url
  );
  const events = await res.json();

  return {
    props: { events: events.data }
  };
}
