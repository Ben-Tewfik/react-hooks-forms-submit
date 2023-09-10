import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0) {
      const formData = {
        firsName: firstName,
        lastName: lastName,
      };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrrors([]);
    } else {
      setErrrors(["First name is required!"]);
    }
  }
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firsName} {data.lastName}
      </div>
    );
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
        ? errors.map((error, index) => {
            return <span key={index}>{error}</span>;
          })
        : null}
      <h3>submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
