import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import Swal from "sweetalert2";
import Balance from "./Balance";

const EditOperation = () => {
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOperationById();
  }, []);

  // Procedimiento para actualizar
  const update = async (e) => {
    try {
      e.preventDefault();
      await db.collection("operations").doc(id).update({
        concept: concept,
        amount: amount,
        date: date,
        type: type,
        category: category,
      });
      navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Changes has been saved!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, try again later...",
      });
    }
  };

  const getOperationById = async () => {
    try {
      const querySnapshot = await db.collection("operations").doc(id).get();
      setConcept(querySnapshot.data().concept);
      setAmount(querySnapshot.data().amount);
      setDate(querySnapshot.data().date);
      setType(querySnapshot.data().type);
      setCategory(querySnapshot.data().category);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, try again later...",
      });
    }
  };

  return (
    <div>
      <div className="App-header">
        <Balance />
      </div>
      <form onSubmit={update} className="card mx-5">
        <h3 className="card-header">Edit Operation</h3>
        <div className="card-body">
          <label className="form-label">
            Concept<i className="fa-thin fa-asterisk"></i>
          </label>
          <input
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="card-body">
          <label className="form-label">
            Amount<i className="fa-thin fa-asterisk"></i>
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="form-control"
            min={1}
            required
          />
        </div>
        <div className="mb-3 card-body">
          <label className="form-label">
            Date<i className="fa-thin fa-asterisk"></i>
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="form-control"
            required
          />
        </div>
        <div className="card-body">
          <label className="form-label">Category</label>
          <i className="fa-thin fa-asterisk"></i>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            required
          >
            <option value="other">Other</option>
            <option value="job">Job</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="gasoline">Gasoline</option>
            <option value="gift">Gift</option>
            <option value="house">House</option>
            <option value="family">Family</option>
          </select>
        </div>

        <button type="submit" className="btn btn-secondary">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditOperation;
