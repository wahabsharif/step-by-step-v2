import React from "react";

const cta_contents = {
  title: "Where We Serve.",
  areas_list: [
    { title: "Damac Hill" },
    { title: "Arbina Ranchers" },
    { title: "The Villa" },
    { title: "Nove Villa" },
    { title: "Mira Town" },
    { title: "Suqar" },
    { title: "Mudon" },
    { title: "Furjan" },
    { title: "Marina" },
    { title: "Palm" },
    { title: "Jumeirah" },
    { title: "The Leakes" },
    { title: "Greens" },
    { title: "Springs" },
    { title: "Jumeirah Golf Club" },
    { title: "Sport City" },
    { title: "Al Barsha" },
    { title: "Barsha South" },
    { title: "Dubai Hills" },
    { title: "Emirates Hills" },
  ],
};
const { areas_list, title } = cta_contents;

const Areas = () => {
  return (
    <div className="tp-cta-area p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section-title-box wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".6s"
            >
              <h2 className="tp-title text-center tp-white-text pb-10">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {areas_list.map((s, i) => (
            <div key={i} className="col-xl-3 col-lg-6 col-md-6 col-10">
              <div className="tp-area-list">
                <p>{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;
