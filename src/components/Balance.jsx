import { useState, useEffect } from "react";
import { db } from "../firebase";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";

const Balance = () => {
  var bal = 0;

  const [operations, setOperation] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getOperations();
  }, []);

  // Procedimiento para traer todas las operaciones
  const getOperations = async () => {
    try {
      const docs = [];
      const querySnapshot = await db.collection("operations").get();
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setOperation(docs);
      setLoader(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, try again later...",
      });
    }
  };

  operations.map((operation) => {
    if (operation.type === "expense") {
      bal -= parseInt(operation.amount);
    } else {
      bal += parseInt(operation.amount);
    }
  });

  return (
    <div>
      {loader ? (
        <div className="mx-auto">
          <Spinner animation="grow" variant="light" />
        </div>
      ) : (
        <h1>${bal} </h1>
      )}
    </div>
  );
};

export default Balance;
