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
exports.storeVideos = exports.storeSongs = void 0;
const videos_model_1 = require("./../models/videos.model");
const songs_model_1 = require("../models/songs.model");
//just store videos and songs in db.
const songsData = [
    {
        singer: "Shohre",
        songName: "to ke nisti",
        type: "pop",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/01%20To%20Ke%20Nisty.mp3",
        picUrl: "https://i1.sndcdn.com/avatars-000039727248-kibna7-t500x500.jpg",
    },
    {
        singer: "Ali Lohrasbi",
        songName: "shabe darya",
        type: "love",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Ali%20Lohrasbi%20-%20Shabe%20Darya.mp3",
        picUrl: "https://ahangchin.ir/wp-content/uploads/2023/03/Ali-Lohrasbi-Shabe-Darya-ahangchin.ir_.jpg",
    },
    {
        singer: "Babak Jahanbakhsh ",
        songName: "Sharhe Shirin",
        type: "dance",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Babak%20Jahanbakhsh%20-%20Sharhe%20Shirin.mp3",
        picUrl: "https://lastfm.freetls.fastly.net/i/u/ar0/554d5b526bcb08cad63a615da56c0d03.jpg",
    },
    {
        singer: "Hamid Askari",
        songName: "Mesle Kooh",
        type: "gym",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Hamid%20Askari%20-%20Mesle%20Kooh.mp3",
        picUrl: "https://lyricstranslate.com/files/styles/artist/public/71Hfy-brksL._SS500_.jpg",
    },
    {
        singer: "Kian Kabiri ",
        songName: "Toei Faghat",
        type: "pop",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Kian%20Kabiri%20-%20Toei%20Faghat.mp3",
        picUrl: "https://musico.ir/wp-content/uploads/2022/05/Kian-Kabiri-Khabam-Nemigire-Musico.ir_.jpg",
    },
    {
        singer: "Mehran Merat",
        songName: "Gelayeh Az Khoda",
        type: "travel",
        songUrl: "https://storage.cloud.google.com/webster-commerce/Songs/Mehran%20Merat%20-%20Gelayeh%20Az%20Khoda.mp3",
        picUrl: "http://sv2.mybia2music.com/s2/Music/1402/01/03/Mehran%20Merat/Mehran%20Merat%20-%20Gelayeh%20Az%20Khoda.jpg",
    },
];
const videosData = [
    {
        singer: "Abas Balivand",
        videoName: "To Rafti",
        videoUrl: "https://storage.cloud.google.com/webster-commerce/Videos/Abas%20Balivand%20-%20To%20Rafti.mp4",
        picUrl: "https://nex1music.ir/upload/2023-02-08/abas-balivand-to-rafti-2023-02-08-14-35-06.jpg",
    },
    {
        singer: "Ali Benton",
        videoName: "Moo Talaei ",
        videoUrl: "https://storage.cloud.google.com/webster-commerce/Videos/Ali%20Benton%20-%20Moo%20Talaei%20(720).mp4",
        picUrl: "https://img.melobit.com/xSKeENiVf_XbFoBYNET_VjraPzwCyJzQ8Ibl_E0Ps6Q/rs:fill:1024:1024:1/dpr:1/Y292ZXJzL2FydGlzdC1hbGktYmVudG9uLmpwZw",
    },
    {
        singer: "Hamid Azadi",
        videoName: "Shabhaye Arvand",
        videoUrl: "https://storage.cloud.google.com/webster-commerce/Videos/Hamid%20Azadi%20-%20Shabhaye%20Arvand.mp4",
        picUrl: "https://i1.sndcdn.com/avatars-000571436601-4441l0-t500x500.jpg",
    },
];
const storeSongs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield songs_model_1.Song.insertMany(songsData);
        console.log("songs stored in db!");
    }
    catch (error) {
        console.log("songs are already stored in db!");
    }
});
exports.storeSongs = storeSongs;
const storeVideos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield videos_model_1.Video.insertMany(videosData);
        console.log("videos stored in db!");
    }
    catch (error) {
        console.log("videos are already stored in db!");
    }
});
exports.storeVideos = storeVideos;
