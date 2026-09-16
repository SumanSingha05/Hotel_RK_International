import React, { useRef, useState } from "react";
import {
  Users,
  Bed,
  Wifi,
  Tv,
  Bath,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ParallaxRoomCard = ({ room, onOpenBooking, onOpenRoomDetail }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: "1200px",
        flexShrink: 0,
        scrollSnapAlign: "start",
        width: "360px",
        maxWidth: "85vw",
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="room-card"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          cursor: "pointer",
          margin: 0,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
        whileHover={{ scale: 1.02 }}
      >
        <div
          className="room-img-container"
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={room.images[0]}
            alt={room.title}
            className="room-img"
            loading="lazy"
            style={{ borderRadius: "16px 16px 0 0" }} // Ensure corners stay rounded if overflow issues occur
          />
          {room.tag && (
            <span
              className={`room-tag ${room.tag.toLowerCase().includes("sea") ? "sea-view" : ""}`}
              style={{
                transform: "translateZ(40px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              }}
            >
              {room.tag}
            </span>
          )}
        </div>

        <div
          className="room-card-body"
          style={{
            transform: "translateZ(40px)",
            transformStyle: "preserve-3d",
          }}
        >
          <h3
            className="room-card-title"
            style={{ transform: "translateZ(10px)" }}
          >
            {room.title}
          </h3>
          <p className="room-card-subtitle">{room.subtitle}</p>

          <div
            className="room-tariff-bar"
            style={{ transform: "translateZ(20px)" }}
          >
            <span className="tariff-note">
              {room.priceNote || "Including Breakfast + GST"}
            </span>
            <span className="tariff-price">RS.{room.price}/NIGHT</span>
          </div>

          <div
            className="room-specs-list"
            style={{ transform: "translateZ(15px)" }}
          >
            <div className="room-spec-item">
              <Users size={15} />
              <span>{room.capacity}</span>
            </div>
            <div className="room-spec-item">
              <Bed size={15} />
              <span>{room.bedType}</span>
            </div>
            <div className="room-spec-item">
              <Bath size={15} />
              <span>Attached Bath</span>
            </div>
            <div className="room-spec-item">
              <Wifi size={15} />
              <span>Free Wi-Fi</span>
            </div>
          </div>

          <div
            className="room-card-actions"
            style={{ transform: "translateZ(50px)" }}
          >
            <button
              onClick={() => onOpenBooking(room)}
              className="btn btn-cyan btn-sm"
              style={{ boxShadow: "0 8px 15px rgba(32, 183, 227, 0.4)" }}
            >
              <span>Book Now</span>
            </button>
            <button
              onClick={() => onOpenRoomDetail(room)}
              className="btn btn-outline btn-sm"
            >
              <span>View Details</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const RoomsSection = ({ rooms, onOpenBooking, onOpenRoomDetail }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const roomsScrollRef = useRef(null);

  const categories = ["All", "Deluxe", "Suite", "Family"];

  const filteredRooms =
    activeFilter === "All"
      ? rooms
      : rooms.filter((r) => r.category === activeFilter);

  const scrollRooms = (direction) => {
    const scrollContainer = roomsScrollRef.current;
    if (!scrollContainer) return;

    const firstRoom = scrollContainer.firstElementChild;
    const scrollDistance =
      firstRoom?.getBoundingClientRect().width || scrollContainer.clientWidth;
    scrollContainer.scrollBy({
      left: direction * (scrollDistance + 30),
      behavior: "smooth",
    });
  };

  return (
    <section id="rooms" className="section" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Rooms</span>
          <h2 className="section-title">
            Fascinating Rooms & Suites at New Digha
          </h2>
          <p className="section-desc">
            Choose from our comfortable, well-appointed AC rooms and suites. All
            tariffs include complimentary breakfast, GST, and 24*7 power backup.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="room-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === "All" ? "All Accommodations" : `${cat} Rooms`}
            </button>
          ))}
        </div>

        {/* Rooms Horizontal Scroll Container */}
        <div className="rooms-carousel-shell">
          <button
            type="button"
            className="rooms-carousel-arrow rooms-carousel-arrow-prev"
            onClick={() => scrollRooms(-1)}
            aria-label="View previous room"
          >
            <ChevronLeft size={22} />
          </button>
          <div
            ref={roomsScrollRef}
            className="hide-scrollbar rooms-carousel-scroll"
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "30px",
              padding:
                "40px 10px 60px 10px" /* Extra padding for 3D popout effect and shadows */,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredRooms.map((room) => (
              <ParallaxRoomCard
                key={room.id}
                room={room}
                onOpenBooking={onOpenBooking}
                onOpenRoomDetail={onOpenRoomDetail}
              />
            ))}
          </div>
          <button
            type="button"
            className="rooms-carousel-arrow rooms-carousel-arrow-next"
            onClick={() => scrollRooms(1)}
            aria-label="View next room"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
