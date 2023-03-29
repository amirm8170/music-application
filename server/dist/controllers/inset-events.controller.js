"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeEvents = void 0;
const events_model_1 = require("./../models/events.model");
const events = [
    {
        title: "Leile foroohar live in Istanbul.",
        time: new Date(),
        address: "No:5 Maçka,Şişli,Istanbul",
        contact: "0173260123123",
        picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWF0fYRgjD9H-IaVFlUF5bQdR1xUkFg3-MmQ&usqp=CAU",
    },
    {
        title: "Shohre live in Istanbul.",
        time: new Date(),
        address: "No:5 Maçka,Şişli,Istanbul",
        contact: "0173260123123",
        picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWF0fYRgjD9H-IaVFlUF5bQdR1xUkFg3-MmQ&usqp=CAU",
    },
];
const storeEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield events_model_1.Event.insertMany(events);
        console.log("events stored in db!");
    }
    catch (error) {
        console.log("events are already stored in db!");
    }
});
exports.storeEvents = storeEvents;
