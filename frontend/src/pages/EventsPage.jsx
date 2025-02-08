import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {allEvents && allEvents.length > 0 ? (
            <div>
              {allEvents.map((event, index) => (
                <EventCard key={event._id} active={true} data={event} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[50vh]">
              <p className="text-[20px] text-[#333]">No events</p>
            </div>
          )}
          <Footer />
        </div>
      )}
    </>
  );
};

export default EventsPage;
