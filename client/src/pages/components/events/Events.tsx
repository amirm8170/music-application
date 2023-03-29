import { useEffect, useState } from "react";
import LoadingIcon from "../../../icons/LoadingIcon";
import { pallet } from "../../../layout/pallet";
import Api from "../../../services/Api";
import notif from "../../../services/notif";
import "./Events.scss";
import EventItems from "./items/EventItems";

const Events = () => {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const response = await Api.get("/events");
        setEvents(response.data);
      } catch (error: any) {
        notif(error.response.data.err.message, "danger");
      }
      setLoading(false);
    };
    getEvents();
  }, []);
  return (
    <section className="event-container">
      <div className="event-cover-container">
        <img className="event-cover-image" src="./assets/home-top.png" alt="" />
      </div>
      <div className="event-title-container">
        <h2 className="event-title-text">Upcoming Events</h2>
        <button className="event-title-btn">My Order</button>
      </div>
      <div className="event-items-container">
        {loading ? (
          <div className="loading-container"><LoadingIcon width={130} height={130} color={pallet.purple.purple7} /></div>
        ) : (
          events &&
          events.map((event: any) => {
            return <EventItems key={event._id} event={event} />;
          })
        )}
      </div>
    </section>
  );
};

export default Events;
