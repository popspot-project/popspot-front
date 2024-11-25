import React, { useState } from "react";
import NoticeDetail from "./NoticeDetail";
import NoticeForm from "./NoticeForm";
import img from "../assets/팝업로고.png";
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
  MenuOption
} from "../styles/NoticeListStyles";

const noticeList = [
  { id: 1,
    logo: img, 
    title: "시디즈&배그",
    address : "서울특별시 강남구 도곡동", 
    startDate: "2024-11-01", 
    endDate: "2024-11-10", 
    startTime: "10:00", 
    endTime: "18:00", 
    description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
  { id: 2,
    logo: img,
    title: "유니클로", 
    address : "서울특별시 성동구 성수동", 
    startDate: "2024-11-05", 
    endDate: "2024-11-12", 
    startTime: "11:00", 
    endTime: "17:00", 
    description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
  { id: 3,
      logo: img,
      title: "다마고치", 
      address : "서울특별시 성동구 성수동", 
      startDate: "2024-11-05", 
      endDate: "2024-11-12", 
      startTime: "11:00", 
      endTime: "17:00", 
      description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
  { id: 4,
      logo: img,
      title: "모아나", 
      address : "서울특별시 성동구 성수동", 
      startDate: "2024-11-05", 
      endDate: "2024-11-12", 
      startTime: "11:00", 
      endTime: "17:00", 
      description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
  { id: 5,
      logo: img,
      title: "힌스", 
      address : "서울특별시 성동구 성수동", 
      startDate: "2024-11-05", 
      endDate: "2024-11-12", 
      startTime: "11:00", 
      endTime: "17:00", 
      description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
  { id: 6,
      logo: img,
      title: "토리든", 
      address : "서울특별시 성동구 성수동", 
      startDate: "2024-11-05", 
      endDate: "2024-11-12", 
      startTime: "11:00", 
      endTime: "17:00", 
      description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
  { id: 7,
      logo: img,
      title: "크리스마스 하우스", 
      address : "서울특별시 성동구 성수동", 
      startDate: "2024-11-05", 
      endDate: "2024-11-12", 
      startTime: "11:00", 
      endTime: "17:00", 
      description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
  { id: 8,
      logo: img,
      title: "오징어게임&기아", 
      address : "서울특별시 성동구 성수동", 
      startDate: "2024-11-05", 
      endDate: "2024-11-12", 
      startTime: "11:00", 
      endTime: "17:00", 
      description: "ㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹㅂㅈㄷㄱㄷㅈㄱㅈㅂㄱㅂㅈㄱㅈㄱㄷㅈㄱㄱㄷㅈㄱㅈㄱㅈㄷㄱㄹㄴㅁㅇㄹㄴㅇㄹㅇㄴㄹㄴㄹㄴㄹㅇㄴㄹㄴㅇㄹㅇㄴㄹㄴㅇㄾㅍㅌㅍㅌㅊㅋㅍㅇㄴㄹㅇㄴㅇㄴㅇㄴㄹㄴㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㅇㄴㅇㄹㄴㄹㅇㄴㄹㄴㄹㄴㄹㅇㄹ" },
];

function NoticeList() {
  const [notices, setNotices] = useState(noticeList); // 공지사항 리스트
  const [selectedNotice, setSelectedNotice] = useState(null); // 선택된 공지사항
  const [isModalOpen, setModalOpen] = useState(false); // 상세보기 모달
  const [showFormModal, setShowFormModal] = useState(false); // 팝업 추가 양식 모달
  const [activeMenu, setActiveMenu] = useState(null); // 현재 활성화된 메뉴
  const [isEditMode, setIsEditMode] = useState(false); // 수정 모드 여부

  const openModal = (id) => {
    const notice = noticeList.find((item) => item.id === id);
    setSelectedNotice(notice);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNotice(null);
  };

  // 팝업 추가 후 리스트 업데이트
  // const addNotice = (newNotice) => {
  //   setNotices([...notices, { id: notices.length + 1, ...newNotice }]);
  //   setShowFormModal(false); // 팝업 추가 모달 닫기
  // };

  const openEditModal = (notice) => {
    setSelectedNotice(notice); // 선택된 공지사항을 설정
    setIsEditMode(true); // 수정 모드 활성화
    setShowFormModal(true); // 모달 열기
  };  

  const deleteNotice = (id) => {
  //   setNotices((prev) =>
  //     prev.map((item) => (item.id === id ? { ...item, hidden: true } : item))
  //   );
  // };
  setNotices((prev) =>
    prev.map((item) => 
      item.id === id 
        ? { ...item, hidden: true } // 삭제된 항목은 hidden 처리
        : item
    )
  );
  setActiveMenu(null); // 삭제 후 버튼 숨기기
};  

  const toggleMenu = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <Container>
      <h1>공지사항 목록</h1>
      {/* 팝업 추가 버튼 */}
      <AddButton onClick={() => setShowFormModal(true)}>팝업 추가</AddButton>

      {/* 상세보기 모달 */}
      <NoticeDetail
        isOpen={isModalOpen}
        onClose={closeModal}
        noticeData={selectedNotice}
      />

      {/* 팝업 추가 양식 */}
      {showFormModal && (
        <ModalBackground onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowFormModal(false); // 배경 클릭 시 모달 닫기
          }
        }}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
                        {/* ModalContainer에 클릭 이벤트를 막기 위해, 모달 내부를 클릭해도 이벤트가 배경으로 전파되지 않습니다. */}
            <NoticeForm
              noticeData={selectedNotice} // 수정 모드일 때 기존 데이터를 전달
              isEditMode={isEditMode} // 수정 모드 여부 전달
              onClose={() => setShowFormModal(false)}
              onSubmit={(updatedNotice) => {
                if (isEditMode) {
                  setNotices((prev) =>
                    prev.map((item) =>
                      item.id === updatedNotice.id
                        ? { ...item, ...updatedNotice }
                        : item
                    )
                  );
                } else {
                  setNotices([...notices, { id: notices.length + 1, ...updatedNotice }]);
                }
                setShowFormModal(false); // 모달 닫기
                setIsEditMode(false); // 수정 모드 종료
              }}
            />
          </ModalContainer>
        </ModalBackground>
      )}

      {/* 리스트에 나오는 항목& 상세보기 */}
      <NoticeGrid>
        {notices.map((notice) => (
          <NoticeCard 
          key={notice.id}
          style={{
            opacity: notice.hidden ? 0.5 : 1,
            pointerEvents: notice.hidden ? "none" : "auto",
            backgroundColor: notice.hidden ? "#f0f0f0" : "#fff",
          }}
        >
            <NoticeButton onClick={() => openModal(notice.id)}>
              <div>
                <strong>{notice.title}</strong>
              </div>
              <div>{notice.address}</div>
              <div>
                {notice.startDate} ~ {notice.endDate}
              </div>
              <div>
                {notice.startTime} ~ {notice.endTime}
              </div>
            </NoticeButton>
            {/* 수정, 삭제 버튼 */}
            <MenuButton onClick={() => toggleMenu(notice.id)}>...</MenuButton>
            {activeMenu === notice.id && (
              <MenuOptions>
                <MenuOption onClick={() => openEditModal(notice)}>수정</MenuOption>
                <MenuOption onClick={() => deleteNotice(notice.id)}>삭제</MenuOption>
              </MenuOptions>
            )}
          </NoticeCard>
        ))}
      </NoticeGrid>
    </Container>
  );
};

export default NoticeList;
