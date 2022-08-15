import React from "react";

const Research = (props) => {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="container justify-content-center" id="eachResearch">
          <h2 onClick={() => props.setter(project)} style={{ color: "#027EA1" }}>
            {project.name}
          </h2>
          <p style={{ color: "#027EA1" }}>{project.area}</p>
          <p>{project.admin}</p>
          <hr />
          <p>
            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
            بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
            گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
            ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
            از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
          </p>
          <p>{project.dateCreated}</p>
        </div>
      ))}
    </div>
  );
};

export default Research;
