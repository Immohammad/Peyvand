import React, { useEffect, useState } from "react";
import Cooperation from "./cooperation";
import { MdDescription } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { MdPeopleAlt } from "react-icons/md";
import { VscGitPullRequestCreate } from "react-icons/vsc";

const FullResearch = (props) => {
  return (
    <div className="container justify-content-center" id="fullResearch">
      {!props.data ? (
        <p>پروژهشی را انتخاب کنید تا شرح کامل آن در اینجا نمایش داده شود.</p>
      ) : (
        <div>
          <h3 style={{ color: "#027EA1", fontWeight: "bold" }}>
            {props.data.name}
          </h3>
          <h4 style={{ color: "#027EA1" }}>{props.data.area}</h4>
          <hr />
          <p>
            عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی
            طرح سفارش گرفته شده استفاده می نماید،یکی از گوشی‌های هوشمند میان‌رده
            و مقرون به‌صرفه، شرکت شیائومی، مدل Redmi Note 9 M2010J19SC است که از
            نظر طراحی و مشخصات فنی در نظر گرفته شده، این گوشی با مدل جهانی
            تفاوت‌های بسیاری دارد. این گوشی به
          </p>
          <hr />
          <GrUserManager style={{ display: "inline" }} />{" "}
          <h5 style={{ display: "inline" }}>مدیران</h5>
          <hr />
          <MdPeopleAlt style={{ display: "inline" }} />{" "}
          <h5 style={{ display: "inline" }}>شرکت‌کنندگان</h5>
          <hr />
          <VscGitPullRequestCreate style={{ display: "inline" }} />{" "}
          <h5 style={{ display: "inline" }}>نیاز به همکاری</h5>
          <Cooperation />
          <hr />
          <MdDescription style={{ display: "inline" }} />{" "}
          <h5 style={{ display: "inline" }}>شرح پژوهش</h5>
          <p>
            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
            بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
            گرافیک از این متن به عنوانصفحه‌نمایش با ابعاد 6.53 اینچ و رزولوشن
            1080×2340 پیکسل از نوع IPS که توانایی نمایش 395 پیکسل در هر اینچ را
            دارد مجهز شده است. بریدگی قطره‌ای شکل ناچ در قسمت بالایی و مرکزی
            صفحه‌نمایش، سنسور دوربین سلفی با رزولوشن 8 مگاپیکسل را در خود جای
            داده است. در قسمت پشتی هم یک سنسور دوربین اصلی با رزولوشن 48
            مگاپیکسل از نوع عریض (wide) در کنار سنسور 8 مگاپیکسل فوق عریض
            (ultrawide) و سنسور 2 مگاپیکسل سنجش عمق، سنسور‌های دوربین سه‌گانه
            این گوشی هوشمند میان‌رده را تشکیل می‌دهند. در مورد سنسور‌های دوربین
            این گوشی باید بگوییم که از سنسور‌های دوربین مناسب و البته متنوعی
            بهره برده است. در بخش مشخصات سخت‌افزاری هم، Redmi Note 9 M2010J19SC
            به پردازنده میان‌رده اسنپدراگون 662 شرکت کوالکام مجهز شده است.
            پردازنده‌ای که در اجرای بازی‌ و نرم‌افزار‌های کاربردی و محبوب،
            توانایی ارائه عملکرد مناسب و قابل قبولی را دارد. باتری قدرتمند با
            میزان ظرفیت 6000 میلی‌آمپر‌ساعتی این گوشی هم سبب شده تا به ازای هر
            بار شارژ صد درصدی، توانایی ارائه طول عمر مفید (زمان آماده به‌کار)
            بیش‌تر از 2 روز را داشته باشد. پشتیبانی از فناوری شارژ سریع با توان
            18 وات و شارژ معکوس، از دیگر قابلیت‌های در نظر گرفته شده برای این
            گوشی هوشمند است. تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
            ظاهر متن باشد.
          </p>
          <hr />
          <p>{props.data.dateCreated}</p>
        </div>
      )}
    </div>
  );
};

export default FullResearch;
