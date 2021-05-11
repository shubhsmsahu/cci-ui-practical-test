import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
const Adduser = () => {
  const api = `https://www.getpostman.com/collections/52af0fe2418e94e65eb2/user`;
  const [data, setData] = useState({
    First_name: "",
    Last_name: "",
    Email: "",
    Mobile: "",
    City: "",
    IsActive: ""
  });

  const submitForm = (e) => {
    // e.preventDefault();
    post(api, {
      First_name: data.First_name,
      Last_name: data.Last_name,
      Email: data.Email,
      Mobile: parseInt(data.Mobile),
      City: data.City,
      IsActive: data.IsActive
    });
  };

  const addUserHandler = (e) => {
    const newData = [...data];
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  return (
    <>
      <div
        className="tab-pane fade"
        id="add_user_tab"
        role="tabpanel"
        aria-labelledby="scratch_card-tab"
      >
        <div className="mt-5 col-6 offset-3">
          <h5>Add User</h5>
          {/* </hr> */}
          <form onSubmit={(e) => submitForm(e)}>
            <div className="form-group row">
              <label for="firstName" className="col-sm-2 col-form-label">
                First name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="lastName" className="col-sm-2 col-form-label">
                Last name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="userEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="userMobile" className="col-sm-2 col-form-label">
                Mobile
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="userMobile"
                  placeholder="Mobile"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="userCity" className="col-sm-2 col-form-label">
                City
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="userCity"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="userIsActive" className="col-sm-2 col-form-label">
                IsActive
              </label>
              <div className="col-sm-1">
                <input
                  type="checkbox"
                  className="form-control"
                  id="userIsActive"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Adduser;
