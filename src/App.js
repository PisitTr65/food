import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="row">
        <nav className="bg-warning p-3 mb-2 text-light">
          <div class="link">
            <img
              src="pngegg.png"
              alt="pngegg"
              className="rounded-circle"
              class="rounded-circle"
            ></img>
            <a href="*" className="col-md-1">
              หน้าแรก
            </a>
            <a href="*" className="col-md-1">
              เมนูอาหารญี่ปุ่น
            </a>
            <a href="Contact.js" className="col-md-1">
              ผู้จัดทำ
            </a>
          </div>
        </nav>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col mt-3">
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮีต</h3>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-4 mt-5">
                <img
                  src="rxxcwbk9ieymxklznujrd70vfzkjmupgr8q2kuyq.png"
                  alt="rxxcwbk9ieymxklznujrd70vfzkjmupgr8q2kuyq"
                  className="rounded-circle"
                />
                <h3>ข้าวหมูทอดคัตสึด้ง</h3>
                <p>
                  ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ
                  ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่
                  แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น เมนูอาหารญี่ปุ่น
                  ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี
                </p>
                <button type="button" class="btn btn-secondary">
                  ดูวิธีทำ
                </button>
              </div>

              <div className="col-sm-4 mt-5">
                <img
                  src="afjifs-2-1170x460.jpg"
                  alt="afjifs-2-1170x460"
                  className="rounded-circle"
                />
                <h3> ราเมนหมูชาชู</h3>
                <p>
                  ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ
                  ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น
                  แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชู ยิ่งอร่อย
                </p>
                <button type="button" class="btn btn-secondary">
                  ดูวิธีทำ
                </button>
              </div>

              <div className="col-sm-4 mt-5">
                <img
                  src="ข้าวปลาซาบะเทอริยากิ.jpg"
                  alt="ข้าวปลาซาบะเทอริยากิ"
                  className="rounded-circle"
                />
                <h3> ปลาซาบะย่างซอสเทริยาก</h3>
                <p>
                  ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม
                  แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ
                  เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย
                  รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น
                  ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอน
                </p>
                <button type="button" class="btn btn-secondary">
                  ดูวิธีทำ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MyFooter">
        <div className="row">
          <p>@ 2023 ผู้จัดทำ. Pisit</p>
        </div>
      </div>
    </>
  );
}

export default App;
