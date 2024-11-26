// import React, { useState } from "react";
// import NoticeDetail from "../components/NoticeDetail";
// import NoticeForm from "../components/NoticeForm";
// import img from "../assets/팝업로고.png";
// import { getNotices, deleteNotice } from "../utils/api";  // api.js에서 함수 불러오기
// import {
//   Container,
//   AddButton,
//   NoticeGrid,
//   NoticeCard,
//   NoticeButton,
//   ModalBackground,
//   ModalContainer,
//   MenuButton,
//   MenuOptions,
//   MenuOption
// } from "../styles/NoticeListStyles";

// // const noticeList = [
// //   { postid: 1,
// //     logo: img,
// //     title: "시디즈&배그",
// //     address : "서울특별시 강남구 도곡동", 
// //     startDate: "2024-11-01", 
// //     endDate: "2024-11-10", 
// //     startTime: "10:00", 
// //     endTime: "18:00", 
// //     description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// //   { postid: 2,
// //     logo: img,
// //     title: "유니클로", 
// //     address : "서울특별시 성동구 성수동", 
// //     startDate: "2024-11-05", 
// //     endDate: "2024-11-12", 
// //     startTime: "11:00", 
// //     endTime: "17:00", 
// //     description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// //   { postid: 3,
// //       logo: img,
// //       title: "다마고치", 
// //       address : "서울특별시 성동구 성수동", 
// //       startDate: "2024-11-05", 
// //       endDate: "2024-11-12", 
// //       startTime: "11:00", 
// //       endTime: "17:00", 
// //       description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// //   { postid: 4,
// //       logo: img,
// //       title: "모아나", 
// //       address : "서울특별시 성동구 성수동", 
// //       startDate: "2024-11-05", 
// //       endDate: "2024-11-12", 
// //       startTime: "11:00", 
// //       endTime: "17:00", 
// //       description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// //   { postid: 5,
// //       logo: img,
// //       title: "힌스", 
// //       address : "서울특별시 성동구 성수동", 
// //       startDate: "2024-11-05", 
// //       endDate: "2024-11-12", 
// //       startTime: "11:00", 
// //       endTime: "17:00", 
// //       description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// //   { postid: 6,
// //       logo: img,
// //       title: "토리든", 
// //       address : "서울특별시 성동구 성수동", 
// //       startDate: "2024-11-05", 
// //       endDate: "2024-11-12", 
// //       startTime: "11:00", 
// //       endTime: "17:00", 
// //       description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// //   { postid: 7,
// //       logo: img,
// //       title: "크리스마스 하우스", 
// //       address : "서울특별시 성동구 성수동", 
// //       startDate: "2024-11-05", 
// //       endDate: "2024-11-12", 
// //       startTime: "11:00", 
// //       endTime: "17:00", 
// //       description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// //   { postid: 8,
// //       logo: img,
// //       title: "오징어게임&기아", 
// //       address : "서울특별시 성동구 성수동", 
// //       startDate: "2024-11-05", 
// //       endDate: "2024-11-12", 
// //       startTime: "11:00", 
// //       endTime: "17:00", 
// //       description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
// // ];

// function NoticeList() {
//   const [notices, setNotices] = useState(noticeList); // 공지사항 리스트
//   const [selectedNotice, setSelectedNotice] = useState(null); // 선택된 공지사항
//   const [isModalOpen, setModalOpen] = useState(false); // 상세보기 모달
//   const [showFormModal, setShowFormModal] = useState(false); // 팝업 추가 양식 모달
//   const [activeMenu, setActiveMenu] = useState(null); // 현재 활성화된 메뉴
//   const [isEditMode, setIsEditMode] = useState(false); // 수정 모드 여부

//   //데이터 목록을 가져오는 useEffect
//   useEffect(() => {
//     // const fetchNotices = async () => {
//     //   try {
//     //     const fetchedNotices = await getNotices();
//     //     setNotices(fetchedNotices);
//     //   } catch (error) {
//     //     console.error("공지사항 목록을 가져오는데 실패했습니다.", error);
//     //   }
//     // };
//     const getNotices = async () => {
//       try {
//         const response = await axios.get('/popspot/list');
//         return response.data;
//       } catch (error) {
//         console.error("팝업 목록 조회 실패:", error);
//         return [];
//       }
//     };
    
//     getNotices();
//   }, []);

//   //데이터 삭제 함수
//   const handleDelete = async (postid) => {
//     try {
//       await deleteNotice(postid);
//       setNotices((prev) => prev.filter((notice) => notice.postid !== postid));
//     } catch (error) {
//       console.error("공지사항 삭제 실패:", error);
//     }
//   };

//   // const openModal = (postid) => {
//   //   const notice = noticeList.find((item) => item.postid === postid);
//   //   setSelectedNotice(notice);
//   //   setModalOpen(true);
//   // };
//   const openModal = async (postid) => {
//     try {
//       const response = await axios.get(`/popspot/list/${postid}`);
//       setSelectedNotice(response.data);
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error("팝업 상세정보 조회 실패:", error);
//     }
//   };
  

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedNotice(null);
//   };

//   // 팝업 추가 후 리스트 업데이트
//   // const addNotice = (newNotice) => {
//   //   setNotices([...notices, { postid: notices.length + 1, ...newNotice }]);
//   //   setShowFormModal(false); // 팝업 추가 모달 닫기
//   // };

//   const openEditModal = (notice) => {
//     setSelectedNotice(notice); // 선택된 공지사항을 설정
//     setIsEditMode(true); // 수정 모드 활성화
//     setShowFormModal(true); // 모달 열기
//   };  

// //   const deleteNotice = (postid) => {
// //   //   setNotices((prev) =>
// //   //     prev.map((item) => (item.postid === postid ? { ...item, hidden: true } : item))
// //   //   );
// //   // };
// //   setNotices((prev) =>
// //     prev.map((item) => 
// //       item.postid === postid 
// //         ? { ...item, hidden: true } // 삭제된 항목은 hidden 처리
// //         : item
// //     )
// //   );
// //   setActiveMenu(null); // 삭제 후 버튼 숨기기
// // };

//   const toggleMenu = (postid) => {
//     setActiveMenu((prev) => (prev === postid ? null : postid));
//   };

//   const formatNoticeData = (formData) => ({
//     ...formData,
//     startDate: new Date(formData.startDate).toISOString(),
//     endDate: new Date(formData.endDate).toISOString(),
//     startTime: formData.startTime, // 시간 형식 확인 필요
//     endTime: formData.endTime,
//   });
  
//   return (
//     <Container>
//       <h1>공지사항 목록</h1>
//       {/* 팝업 추가 버튼 */}
//       <AddButton onClick={() => setShowFormModal(true)}>팝업 추가</AddButton>

//       {/* 상세보기 모달 */}
//       <NoticeDetail
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         noticeData={selectedNotice}
//       />

//       {/* 팝업 추가 양식 */}
//       {showFormModal && (
//         <ModalBackground onClick={(e) => {
//           if (e.target === e.currentTarget) {
//             setShowFormModal(false); // 배경 클릭 시 모달 닫기
//           }
//         }}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//                         {/* ModalContainer에 클릭 이벤트를 막기 위해, 모달 내부를 클릭해도 이벤트가 배경으로 전파되지 않습니다. */}
//             <NoticeForm
//               noticeData={selectedNotice} // 수정 모드일 때 기존 데이터를 전달
//               isEditMode={isEditMode} // 수정 모드 여부 전달
//               onClose={() => setShowFormModal(false)}
//               // onSubmit={(updatedNotice) => {
//               //   if (isEditMode) {
//               //     setNotices((prev) =>
//               //       prev.map((item) =>
//               //         item.postid === updatedNotice.postid
//               //           ? { ...item, ...updatedNotice }
//               //           : item
//               //       )
//               //     );
//               //   } else {
//               //     setNotices([...notices, { postid: notices.length + 1, ...updatedNotice }]);
//               //   }
//               //   setShowFormModal(false); // 모달 닫기
//               //   setIsEditMode(false); // 수정 모드 종료
//               // }}
//               onSubmit={async (updatedNotice) => {
//                 try {
//                   if (isEditMode) {
//                     await axios.put(`/popspot/${updatedNotice.postid}`, updatedNotice); // 수정 요청
//                     setNotices((prev) =>
//                       prev.map((item) =>
//                         item.postid === updatedNotice.postid
//                           ? { ...item, ...updatedNotice }
//                           : item
//                       )
//                     );
//                   } else {
//                     const response = await axios.post('/popspot/create', updatedNotice); // 생성 요청
//                     setNotices((prev) => [...prev, response.data]);
//                   }
//                   setShowFormModal(false); // 모달 닫기
//                 } catch (error) {
//                   console.error('팝업 추가/수정 실패:', error);
//                 }
//               }}
              
//             />
//           </ModalContainer>
//         </ModalBackground>
//       )}

//       {/* 리스트에 나오는 항목& 상세보기 */}
//       <NoticeGrid>
//         {notices.map((notice) => (
//           <NoticeCard 
//           key={notice.postid}
//           style={{
//             opacity: notice.hidden ? 0.5 : 1,
//             pointerEvents: notice.hidden ? "none" : "auto",
//             backgroundColor: notice.hidden ? "#f0f0f0" : "#fff",
//           }}
//         >
//             <NoticeButton onClick={() => openModal(notice.postid)}>
//               <div>
//                 <strong>{notice.title}</strong>
//               </div>
//               <div>{notice.address}</div>
//               <div>
//                 {notice.startDate} ~ {notice.endDate}
//               </div>
//               <div>
//                 {notice.startTime} ~ {notice.endTime}
//               </div>
//             </NoticeButton>
//             {/* 수정, 삭제 버튼 */}
//             <MenuButton onClick={() => toggleMenu(notice.postid)}>...</MenuButton>
//             {activeMenu === notice.postid && (
//               <MenuOptions>
//                 <MenuOption onClick={() => openEditModal(notice)}>수정</MenuOption>
//                 <MenuOption onClick={() => deleteNotice(notice.postid)}>삭제</MenuOption>
//               </MenuOptions>
//             )}
//           </NoticeCard>
//         ))}
//       </NoticeGrid>
//     </Container>
//   );
// };

// export default NoticeList;

import React, { useState, useEffect } from "react";
import { getNotices, deleteNotice } from "../utils/api";
import NoticeDetail from "../components/NoticeDetail";
import NoticeForm from "../components/NoticeForm";
import {
  Container,
  AddButton,
  NoticeGrid,
  NoticeCard,
  NoticeButton,
  ModalBackground,
  ModalContainer,
  MenuButton,
  MenuOptions,
  MenuOption,
} from "../styles/NoticeListStyles";

function NoticeList() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchNotices = async () => {
      const data = await getNotices();
      setNotices(data);
    };

    fetchNotices();
  }, []);

  const openEditModal = (notice) => {
    setSelectedNotice(notice);
    setIsEditMode(true);
    setShowFormModal(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNotice(null);
    setIsEditMode(false);
  };

  const handleDelete = async (postid) => {
    await deleteNotice(postid);
    setNotices((prev) => prev.filter((notice) => notice.postid !== postid));
  };

  const formatNoticeData = (formData) => ({
    ...formData,
    startDate: new Date(formData.startDate).toISOString(),
    endDate: new Date(formData.endDate).toISOString(),
    startTime: formData.startTime, // 시간 형식 확인 필요
    endTime: formData.endTime,
  });

  const toggleMenu = (postid) => {
    setActiveMenu((prev) => (prev === postid ? null : postid));
  };
  

  return (
    <Container>
      <h1>공지사항 목록</h1>
      <AddButton onClick={() => setShowFormModal(true)}>팝업 추가</AddButton>

      <NoticeDetail isOpen={isModalOpen} onClose={closeModal} noticeData={selectedNotice} />

      {showFormModal && (
        <ModalBackground onClick={(e) => e.target === e.currentTarget && setShowFormModal(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <NoticeForm
              noticeData={selectedNotice}
              isEditMode={isEditMode}
              onClose={closeModal}
              onSubmit={async (updatedNotice) => {
                const formattedData = formatNoticeData(updatedNotice);

                if (isEditMode) {
                  await axios.put(`/popspot/${formattedData.postid}`, formattedData);
                  setNotices((prev) =>
                    prev.map((item) =>
                      item.postid === formattedData.postid ? { ...item, ...formattedData } : item
                    )
                  );
                } else {
                  const response = await axios.post("/popspot/create", formattedData);
                  setNotices((prev) => [...prev, response.data]);
                }
                setShowFormModal(false);
              }}
            />
          </ModalContainer>
        </ModalBackground>
      )}

      <NoticeGrid>
        {notices.map((notice) => (
          <NoticeCard
            key={notice.postid}
            style={{
              opacity: notice.hidden ? 0.5 : 1,
              pointerEvents: notice.hidden ? "none" : "auto",
              backgroundColor: notice.hidden ? "#f0f0f0" : "#fff",
            }}
          >
            <NoticeButton onClick={() => setModalOpen(true)}>
              <strong>{notice.title}</strong>
              <div>{notice.address}</div>
              <div>
                {notice.startDate} ~ {notice.endDate}
              </div>
              <div>
                {notice.startTime} ~ {notice.endTime}
              </div>
            </NoticeButton>
            <MenuButton onClick={() => toggleMenu(notice.postid)}>...</MenuButton>
            {activeMenu === notice.postid && (
              <MenuOptions>
                <MenuOption onClick={() => openEditModal(notice)}>수정</MenuOption>
                <MenuOption onClick={() => handleDelete(notice.postid)}>삭제</MenuOption>
              </MenuOptions>
            )}
          </NoticeCard>
        ))}
      </NoticeGrid>
    </Container>
  );
}

export default NoticeList;
