import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import EventItem from "@/components/EventItem";
export default function EventPage({ events }) {
  return (
    <Layout>
      <h1 className="text-3xl font-poppins font-bold"> Events</h1>
      {events.length === 0 && <h3> No events to show</h3>}
      {events.map(evt => <EventItem key={evt.id} evt={evt} />)}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const events = await res.json();

  return {
    props: { events: events.data }
  };
}
