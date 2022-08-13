import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";
import logo from "./stuffs/logo.png";
import sbuLogo from "./stuffs/sbuLogo.png";
import { MdEmail } from "react-icons/md";

// https://www.devwares.com/docs/contrast/react/components/footer/#:~:text=The%20React%20Bootstrap%205%20Footer,of%20our%20color%20palette%20classes.
const Footer = () => {
  return (
    <CDBFooter className="shadow">
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
            <p className="h5 mb-4 footerP" style={{ fontWeight: "600" }}>
              دربارۀ پیوند
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <div className="my-3" style={{ width: "250px" }}>
                برخی اوقات به سختی می‌توانند کالاهای دل‌خواهشان را از میان حجم
                انبوه و اغلب غیر سازمان یافته‌ی این کسب و کارها بیابند و به آن
                دسترسی داشته باشند. از سوی دیگر در شرایط اقتصادی امروز، فرآیند
                فروش و تامین بودجه‌ی کافی جهت بازا
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
              style={{ cursor: "pointer", padding: "0" }}
            >
              <MdEmail />
              <span>mo.movahedinia@gmail.com</span>
              <span>reza.kalhor19@gmail.com</span>
              <br />
              <CDBIcon fab icon="telegram" />
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
            ساخته‌شده با افتخار در ایران | 1401.
          </small>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer;
