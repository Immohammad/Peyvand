import React from "react";
import {
  CDBFooter,
  CDBIcon,
  CDBBox,
} from "cdbreact";
import logo from "./stuffs/logo.png";
import sbuLogo from "./stuffs/sbuLogo.png";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <CDBFooter className="shadow" style={{ backgroundColor: "white" }}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <div className="d-flex p-0 text-dark">
              <img src={logo} width="110px" />
            </div>
          </CDBBox>

          <CDBBox>
            <p className="h5 footerP" style={{ fontWeight: "600" }}>
              دربارۀ پیوند
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ padding: "0" }}
            >
              <div className="my-3" style={{ width: "250px" }}>
                پیوند سامانه‌ای است که با هدف تسهیل ارتباط میان دانشجویان،
                اساتید و واحدهای فناور دانشگاه شهید بهشتی توسعه داده شده؛ امید
                است که بتواند نیاز به نیروی انسانی در پیشبرد تمام پژوهش‌ها و
                پروژه‌های میان‌رشته‌ای درون دانشگاه را مرتفع نماید و گوشه‌ای از موجبات تعالی
                علمی و فناوری دانشگاه را فراهم آورد.
              </div>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4 footerP" style={{ fontWeight: "600" }}>
              ارتباط با ما
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ padding: "0" }}
            >
              <MdEmail />
              <span>khodadi_J@yahoo.com</span>
              <span>mo.movahedinia@gmail.com</span>
              <span>reza.kalhor19@gmail.com</span>
              <br />
              <CDBIcon fab icon="telegram" />
              <span>hossein_khd@</span>
              <span>Mohmov@</span>
              <span>reza_k324@</span>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <img src={sbuLogo} width="110px" style={{ borderRadius: "100%" }} />
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: "100%" }}
          className="mx-auto mt-4"
        >
          <small className="text-center" style={{ width: "50%" }}>
            &copy; کلیه حقوق این وب‌سایت متعلق به مجموعۀ پیوند بهشتی می‌باشد.
            ساخته‌شده با افتخار در ایران | 1401
          </small>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;
