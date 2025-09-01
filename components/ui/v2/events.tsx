"use client";

import { buttonVariants } from "@/components/variants/button-variants";
import { CoinfestAsia, ETHVietnam, MalaysiaBlockchainWeek, SuperAI, TaipeiBlockchainWeek, Token2049 } from "@/lib/assets/events";
import { cn } from "@/lib/utils/style";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type EventRole = 'Community Partner' |
  'Speaker' | 'Affiliate Partner' |
  'Attendee';

type Event = {
  title: string;
  img: string | StaticImageData;
  start_date: Date;
  end_date: Date;
  location: string;
  roles: EventRole[];
}

const events: Event[] = [
  {
    title: "Coinfest Asia 2025",
    img: CoinfestAsia,
    start_date: new Date("2025-08-21"),
    end_date: new Date("2025-08-22"),
    location: "Nuanu City, Bali, Indonesia",
    roles: ["Community Partner"]
  },
  {
    title: "Taipei Blockchain Week 2025",
    img: TaipeiBlockchainWeek,
    start_date: new Date("2025-09-04"),
    end_date: new Date("2025-09-06"),
    location: "Taipei City, Taiwan",
    roles: ["Speaker"]
  },
  {
    title: "TOKEN2049 2025",
    img: Token2049,
    start_date: new Date("2025-10-01"),
    end_date: new Date("2025-10-02"),
    location: "Marina Bay Sands, Singapore",
    roles: ["Community Partner", "Affiliate Partner"]
  },
  {
    title: "ETH Vietnam 2025",
    img: ETHVietnam,
    start_date: new Date("2025-08-09"),
    end_date: new Date("2025-08-10"),
    location: "Ho Chi Minh, Vietnam",
    roles: ["Community Partner"]
  },
  {
    title: "Malaysia Blockchain Week 2025",
    img: MalaysiaBlockchainWeek,
    start_date: new Date("2025-07-21"),
    end_date: new Date("2025-07-22"),
    location: "Kuala Lumpur, Malaysia",
    roles: ["Attendee"]
  },
  {
    title: "Super AI 2025",
    img: SuperAI,
    start_date: new Date("2025-06-18"),
    end_date: new Date("2025-06-19"),
    location: "Marina Bay Sands, Singapore",
    roles: ["Community Partner"]
  }
]

function getRoleColor(event_role: EventRole) {
  switch (event_role) {
    case 'Community Partner':
      return 'bg-cyan-300'
    case 'Speaker':
      return 'bg-green-300'
    case 'Affiliate Partner':
      return 'bg-yellow-300'
    case 'Attendee':
      return 'bg-orange-300'
    default:
      return 'bg-gray-300'
  }
}

function EventCard({ event }: { event: Event }) {
  const isEventEnded = event.end_date < new Date();
  return (
    <div className="bg-white dark:bg-gray-800 border border-black rounded-2xl px-4 py-4 sm:px-6 shadow-sm active:drop-shadow-none transition-all duration-200 hover:translate-y-[-0.25rem] hover:translate-x-[0.25rem] hover:shadow-[-0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none">
      {/* Event Logo and Status */}
      <div className={cn("flex items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2", {
        "mb-2": event.title === 'Malaysia Blockchain Week 2025' || event.title === 'Coinfest Asia 2025' || event.title === 'Super AI 2025' || event.title === 'ETH Vietnam 2025' || event.title === 'Taipei Blockchain Week 2025' || event.title,
      })}>
        <Image
          src={event.img}
          alt={event.title}
          className={cn("h-5 sm:h-6 w-fit object-contain flex-shrink-0", {
            "h-6 sm:h-8": event.title === 'ETH Vietnam 2025' || event.title === 'Super AI 2025' || event.title === 'Taipei Blockchain Week 2025' || event.title === 'TOKEN2049 2025' || event.title === 'Malaysia Blockchain Week 2025',
            "h-7 sm:h-9": event.title === 'Coinfest Asia 2025',
            "invert-0 dark:invert": event.title === 'ETH Vietnam 2025' || event.title === 'TOKEN2049 2025',
            "dark:invert-0 invert": event.title === 'Coinfest Asia 2025' || event.title === 'Super AI 2025' || event.title === 'Malaysia Blockchain Week 2025' || event.title === 'Taipei Blockchain Week 2025'
          })}
        />
        <div className="text-right shrink-0">
          <span className={cn("text-xs sm:text-sm px-2 py-1 sm:px-3 rounded-full whitespace-nowrap", {
            "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400": isEventEnded,
            "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400": !isEventEnded
          })}>
            {isEventEnded ? 'Event ended' : 'Upcoming event'}
          </span>
        </div>
      </div>

      {/* Event Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 leading-tight">
        {event.title}
      </h3>

      {/* Date Range */}
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">
        {event.start_date.getDate()} - {event.end_date.getDate()} {event.start_date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>

      {/* Location */}
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-1">
        {event.location}
      </p>

      {/* Role Badges */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-0">
        {event.roles.map((role, roleIndex) => (
          <span
            key={roleIndex}
            className={cn("inline-block border-[1.5px] border-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium", getRoleColor(role))}
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Events() {
  const [showAllEvents, setShowAllEvents] = useState(false);

  // Separate events into upcoming and past
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => event.start_date > currentDate);
  const pastEvents = events.filter(event => event.end_date < currentDate);

  // Determine which events to display
  const eventsToShow = showAllEvents
    ? [...upcomingEvents, ...pastEvents].sort((a, b) => b.start_date.getTime() - a.start_date.getTime())
    : upcomingEvents.sort((a, b) => a.start_date.getTime() - b.start_date.getTime());

  return (
    <section id="events" className="w-full bg-gray-50 dark:bg-gray-900 py-8 sm:py-10 md:py-16 px-[1.5rem] sm:px-6 md:px-8 lg:px-16 xl:px-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#343060] dark:text-[#e8eaff] mb-3 sm:mb-4 transition-colors duration-300">
            Events
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#343060]/80 dark:text-[#e8eaff]/80 transition-colors duration-300 leading-relaxed">
            We partner and show up where builders gather,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>forging global connections and sharing what we learn.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {eventsToShow.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        {/* Show message when no events */}
        {eventsToShow.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No {showAllEvents ? '' : 'upcoming '}events to display.
            </p>
          </div>
        )}

        {/* See Past Events Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllEvents(!showAllEvents)}
            className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full gap-2 sm:w-64 md:w-48 active:drop-shadow-none py-3 border border-black dark:border-white transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] dark:hover:shadow-[0.25rem_0.25rem_#fff] active:translate-x-0 active:translate-y-0 active:shadow-none button-1' })}
          >
            <span className="shrink-0">
              {showAllEvents ? 'Show upcoming only' : 'See past events'}
            </span>
            <span className="inline-block">
              {showAllEvents ? '↑' : '→'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}