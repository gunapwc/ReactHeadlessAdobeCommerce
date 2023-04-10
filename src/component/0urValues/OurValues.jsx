import React from "react";
import { ReactSVG } from "react-svg";
import {
  Gandhi,
  NelsonMandela,
  MotherTeresa,
  Einstein,
  SteveJobs,
  SHZayed,
} from "../../utils/images";
import "./OurValues.scss";

const OurValues = () => {
  const values = [
    {
      id: 1,
      img: Einstein,
      name: "ALBERT EINSTEIN",
      title: "EXCELLENCE",
      details:
        "Surpassing current benchmarks constantly by continually challenging our ability & skills to take the organization to greater heights.",
    },
    {
      id: 2,
      img: Gandhi,
      title: "RESPECT",
      name: "MAHATMA GANDHI",
      details:
        "Treating people with utmost dignity, valuing their contributions & fostering a culture that allow each individual to rise to their fullest potential.",
    },
    {
      id: 3,
      img: MotherTeresa,
      name: "MOTHER TERESA",
      title: "COMPASSION",
      details: "Going beyond boundaries with empathy & care.",
    },
    {
      id: 4,
      img: SteveJobs,
      name: "STEVE JOBS",
      title: "PASSION",
      details:
        "Going the extra mile willingly, with a complete sense of belongingness & purpose while adding value to our stakeholders.",
    },
    {
      id: 5,
      img: NelsonMandela,
      name: "NELSON MANDELA",
      title: "INTEGRITY",
      details:
        "Doing the right thing without any compromises & embracing a higher standard of conduct.",
    },
    {
      id: 6,
      img: SHZayed,
      name: "H.H. SHEIKH ZAYED BIN SULTAN AL NAHYAN",
      title: "UNITY",
      details:
        "Harnessing the power of synergy & engaging people for exponential performance & results.",
    },
  ];
  return (
    <div className="OurValues">
      {values &&
        values.map((e) => {
          return (
            <div key={e.id} className="OurValues_section">
              <ReactSVG className="OurValues_section_svg" src={e.img} />
              <div className="OurValues_section_details">
                <h6>{e.title}</h6>
                <p>{e.details}</p>
                <h5>{e.name}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OurValues;
