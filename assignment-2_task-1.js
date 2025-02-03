const appointments = [
    { clientName: "Yash", time: new Date("2025-02-03T10:30:00"), service: "Meet-up" },
    { clientName: "Manoj", time: new Date("2025-02-03T11:30:00"), service: "Work-disction" },
    { clientName: "Ram", time: new Date("2025-02-03T10:00:00"), service: "Work-disction" },
    { clientName: "Prince", time: new Date("2025-02-03T11:00:00"), service: "Meet-up" }
  ];
  console.log(appointments)


  const addAppointment = (clientName, time, service) => {
    if (!clientName || isNaN(new Date(time))) return console.log("Invalid input.");
    appointments.push({ clientName, time: new Date(time), service });
    console.log(`Added: ${clientName} at ${new Date(time).toLocaleTimeString()}`);
  };
    addAppointment("Daksh", "2025-02-03T14:00:00", "Consultation");
    addAppointment("Prashant", "2025-02-03T14:30:00", "Follow-up");

    
  const showUpcomingAppointments = () => {
    const now = new Date();
    appointments
      .filter(app => app.time > now && app.time <= new Date(now.getTime() + 3600000))
      .forEach(app => console.log(`Client: ${app.clientName}, Time: ${app.time.toLocaleTimeString()}, Service: ${app.service}`));
  };
  showUpcomingAppointments();



  const sendReminders = () => {
    const now = new Date();
    appointments.forEach(app => {
      const diff = app.time - now;
      if (diff > 0) setTimeout(() => console.log(`Reminder: ${app.service} with ${app.clientName} at ${app.time.toLocaleTimeString()}`), diff);
    });
  };
  
  sendReminders();