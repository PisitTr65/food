// import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import pngegg from "./pngegg.png";
import hero from "./hero.jpg";
import rxxcwbk9ieymxklznujrd70vfzkjmupgr8q2kuyq from "./rxxcwbk9ieymxklznujrd70vfzkjmupgr8q2kuyq.png";
import ข้าวปลาซาบะเทอริยากิ from "./ข้าวปลาซาบะเทอริยากิ.jpg";

export function Layout() {
  return (
    <nav className="container-fluid p-3 Bgo text-white text-center row">
      <img src={pngegg} alt="Logo" className="photo rounded-circle" />
      <NavLink
        to="/"
        className="link px-2 col-sm-2 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าหลัก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2 col-sm-1 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

export function Footer() {
  return (
    <div class="container-fluid Bgo p-3 mt-5 text-center">
      <nav class="row">
        <div className="col-sm-2 mt-2">
          <h3 className="Editfo siligon01">@ 2023</h3>
        </div>
        <div className="col-sm-3 mt-2 siligon02">
          <h3 className="Editfo siligon02">ผู้จัดทำ : Pisit Treeratwicha</h3>
        </div>
        <div class="col-sm-5 ">
          <></>
        </div>
        <div className="col-sm-2 mt-2 siligon02">
          <h3 className="Editfo">Back to top</h3>
        </div>
      </nav>
    </div>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div class="container mt-5">
        <div class="row">
          <div className="polygon col-sm-12 p-2 text-center">
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={rxxcwbk9ieymxklznujrd70vfzkjmupgr8q2kuyq}
              alt="
              Katsudon"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ข้าวหมูทอดคัตสึด้ง</h3>
            <p className="Lumideim p-2">
              ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ
              ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่ แล้วราดลงบนข้าวอีกทีหนึ่ง
              ทำให้เป็น เมนูอาหารญี่ปุ่น ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด
              ลื่นคอกำลังดี
            </p>
            <a
              class="button btn btn-secondary Alumineam"
              href="Food01.js"
              type="button"
            >
              ดูวิธีทำ>>
            </a>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={hero}
              alt="Chashu Pork Ramen"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ราเมนหมูชาชู</h3>
            <p className="Lumideim p-2">
              ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ
              ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น
              แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชู ยิ่งอร่อย
            </p>
            <button type="button" class="btn btn-secondary Alumineam">
              ดูวิธีทำ>>
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={ข้าวปลาซาบะเทอริยากิ}
              alt="ข้าวปลาซาบะเทอริยากิ"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ปลาซาบะย่างซอสเทริยาก</h3>
            <p className="Lumideim p-2">
              ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม
              แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ
              เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย
              รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น ก็จะได้ลิ้มรสชาติที่อร่อย
              ตามแบบฉบับชาวญี่ปุ่นแน่นอน
            </p>
            <button type="button" class="btn btn-secondary Alumineam">
              ดูวิธีทำ>>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/My">
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
