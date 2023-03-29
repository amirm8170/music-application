import { Event } from "./../models/events.model";

const events = [
  {
    title: "Leile foroohar live in Istanbul.",
    time: new Date(),
    address: "No:5 Maçka,Şişli,Istanbul",
    contact: "0173260123123",
    picUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWF0fYRgjD9H-IaVFlUF5bQdR1xUkFg3-MmQ&usqp=CAU",
  },
  {
    title: "Shohre live in Istanbul.",
    time: new Date(),
    address: "No:5 Maçka,Şişli,Istanbul",
    contact: "0173260123123",
    picUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWF0fYRgjD9H-IaVFlUF5bQdR1xUkFg3-MmQ&usqp=CAU",
  },
];

export const storeEvents = async () => {
  try {
    await Event.insertMany(events);
    console.log("events stored in db!");
  } catch (error) {
    console.log("events are already stored in db!");
  }
};
