import React from "react";
// import One from "../img/1.jpg"
// import Two from "../img/2.jpg"
// import Three from "../img/3.jpg"

// import noteContext from '../context/notes/noteState'

export const About = () => {
  // let a = useContext(noteContext)
  let Note = [
    {
      title: "Card title",
      subtitle: "Card subtitle",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Card title",
      subtitle: "Card subtitle",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Card title",
      subtitle: "Card subtitle",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Card title",
      subtitle: "Card subtitle",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <div>
      <div className="container py-5">
        <div className="text-center mx-5">
          <p className="text-primary">save your imagination</p>
          <h2>With Note-Book</h2>
          <p className="mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            illo! Voluptate quae impedit, fuga blanditiis in reprehenderit
            adipisci culpa praesentium veniam eveniet eaque dolor, deserunt ipsa
            possimus aliquam molestias natus voluptas nulla.
          </p>
        </div>
        <div className=" mt-5 container row d-flex justify-content-between">
          {Note.map((index, key) => {
            return (
              <div key={key} className="card card-width ">
                <div className="card-body">
                  <h5 className="card-title">{index.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {index.subtitle}
                  </h6>
                  <p className="card-text">{index.desc}</p>
                  <span className="card-link">Card link &#8594;</span>
                </div>
              </div>
            );
          })}
        </div>

        <hr className="mt-5" />
        <div className="text-center">
          <button className="btn btn-primary">More info</button>
        </div>
      </div>
    </div>
  );
};
