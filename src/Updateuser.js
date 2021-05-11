import React from "react";

const Updateuser = () => {
  return (
    <>
      <div class="modal" id="edit_user_modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit User</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div class="form-group row">
                  <label for="firstName" class="col-sm-3 col-form-label">
                    First name
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="lastName" class="col-sm-3 col-form-label">
                    Last name
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="userEmail" class="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="email"
                      class="form-control"
                      id="userEmail"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="userMobile" class="col-sm-3 col-form-label">
                    Mobile
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="userMobile"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="userCity" class="col-sm-3 col-form-label">
                    City
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="userCity"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="userIsActive" class="col-sm-3 col-form-label">
                    IsActive
                  </label>
                  <div class="col-sm-1">
                    <input
                      type="checkbox"
                      class="form-control"
                      id="userIsActive"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary">
                      Edit User
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Updateuser;
