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
exports.storeSongs = void 0;
const songs_model_1 = require("../models/songs.model");
const data = [
    {
        singer: "Shohre",
        songName: "to ke nisti",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/01%20To%20Ke%20Nisty.mp3",
        picUrl: "https://i1.sndcdn.com/avatars-000039727248-kibna7-t500x500.jpg",
    },
    {
        singer: "Ali Lohrasbi",
        songName: "shabe darya",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Ali%20Lohrasbi%20-%20Shabe%20Darya.mp3",
        picUrl: "https://ahangchin.ir/wp-content/uploads/2023/03/Ali-Lohrasbi-Shabe-Darya-ahangchin.ir_.jpg",
    },
    {
        singer: "Babak Jahanbakhsh ",
        songName: "Sharhe Shirin",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Babak%20Jahanbakhsh%20-%20Sharhe%20Shirin.mp3",
        picUrl: "https://lastfm.freetls.fastly.net/i/u/ar0/554d5b526bcb08cad63a615da56c0d03.jpg",
    },
    {
        singer: "Hamid Askari",
        songName: "Mesle Kooh",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Hamid%20Askari%20-%20Mesle%20Kooh.mp3",
        picUrl: "https://lyricstranslate.com/files/styles/artist/public/71Hfy-brksL._SS500_.jpg",
    },
    {
        singer: "Kian Kabiri ",
        songName: "Toei Faghat",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Kian%20Kabiri%20-%20Toei%20Faghat.mp3",
        picUrl: "https://musico.ir/wp-content/uploads/2022/05/Kian-Kabiri-Khabam-Nemigire-Musico.ir_.jpg",
    },
    {
        singer: "Mehran Merat",
        songName: "Gelayeh Az Khoda",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Mehran%20Merat%20-%20Gelayeh%20Az%20Khoda.mp3",
        picUrl: "http://sv2.mybia2music.com/s2/Music/1402/01/03/Mehran%20Merat/Mehran%20Merat%20-%20Gelayeh%20Az%20Khoda.jpg",
    },
];
const storeSongs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield songs_model_1.Song.insertMany(data);
        console.log("songs stored in db!");
    }
    catch (error) {
        console.log("songs already stored in db!");
    }
});
exports.storeSongs = storeSongs;
