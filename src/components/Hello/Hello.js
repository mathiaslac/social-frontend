import { Fragment, useState } from "react";
import "./Hello.css";

const Hello = () => {
  const [show, toggleShow] = useState(true);

  return (
    <Fragment>
      <div className="container">
        {show && (
          <div className="hello__post">
            <div className="hello_text">
              <h1 className="hello">Good Morning, Snooze</h1>
              <p className="grey">
                Write it on your heart that every day is the best day in the
                year
              </p>
            </div>
            <i
              onClick={() => toggleShow(!show)}
              className="grey fas fa-times pointer"
            ></i>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Hello;
