import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => (
    <FullCalendar
        className="full-calendar"
        footerToolbar={false}
        headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'timeGridWeek,timeGridDay'
        }}
        plugins={[ timeGridPlugin, interactionPlugin ]}
        initialView={'timeGridWeek'}

        // events={events}

        nowIndicator={true}
        allDaySlot={false}

        // eventMouseEnter={(e) => {
        //     Tooltip(e, e.event.title);
        // }}

        // eventClick={eventClick} // Delete the event on click.
        
        selectable={true} // Makes the calendar interactive. Requires the interactionPlugin
        
        // select={selectCallback} // Function to save shit whilst dragging.
        
        selectMirror={false} // Will show the event whilst dragging.
    />
);

export default Calendar;