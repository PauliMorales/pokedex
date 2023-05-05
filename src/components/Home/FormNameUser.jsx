import { useRef } from "react";
import { setTrainerName } from "../../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../pages/styles/home.css";

const FormNameUser = () => {
  const inputName = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim().toUpperCase()));
    navigate("/pokedex");
  };

  return (
    <form className="home__form" onSubmit={handleSubmit}>
      <input className="home__input" ref={inputName} type="text" />
      <button className="home__btn">Start</button>
    </form>
  );
};

export default FormNameUser;
