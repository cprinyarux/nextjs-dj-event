/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

const EventItem = ({ evt }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.attributes.image.data
              ? evt.attributes.image.data.attributes.formats.thumbnail.url
              : "/images/event-default.png"
          }
          alt=""
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span className="text-xs font-serif font-thin">
          {new Date(evt.attributes.date).toLocaleDateString("en-US")} at{" "}
          {evt.attributes.time}
        </span>
        <h3 className="text-xl font-bold font-serif">
          {evt.attributes.name}
        </h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.attributes.slug}`}>
          <button className="btn text-sm">View Event</button>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
