import React from "react";

const UserTable = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="user-tab"
            data-toggle="tab"
            href="#user_listing_tab"
            role="tab"
            aria-controls="user"
            aria-selected="true"
          >
            User
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="scratch_card-tab"
            data-toggle="tab"
            href="#add_user_tab"
            role="tab"
            aria-controls="scratch_card"
            aria-selected="false"
          >
            Add User
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="user_listing_tab"
          role="tabpanel"
          aria-labelledby="user-tab"
        >
          <div className="col-10 mt-2 offset-1">
            <div className="row m-2">
              <h5 className="col-3">Users:</h5>

              <div className="col-9 actions d-flex justify-content-end">
                <button
                  id="set_active"
                  className="btn btn-info ml-1  action-btns"
                >
                  active
                </button>
                <button
                  id="set_inactive"
                  className="btn btn-info ml-1 action-btns"
                >
                  inactive
                </button>
              </div>
            </div>

            <table className="table table-hover table-bordered table-striped">
              <thead className="text-center">
                <tr>
                  <th className="text-center">
                    <input type="checkbox" name="" id="check_all_users" />
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>City</th>
                  <th>IsActive</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="user_check"
                    />
                  </td>
                  <td className="text-left">Brandon</td>
                  <td className="text-left">Dsouza</td>
                  <td className="text-left">
                    Brandon.Dsouza@creativecapsule.com
                  </td>
                  <td className="text-left">9823163598</td>
                  <td className="text-left">Margao</td>
                  <td className="text-left">True</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#edit_user_modal"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="user_check"
                    />
                  </td>

                  <td className="text-left">Collin</td>
                  <td className="text-left">Pereira</td>
                  <td className="text-left">
                    Collin.Pereira@creativecapsule.com
                  </td>
                  <td className="text-left">9823463598</td>
                  <td className="text-left">Varca</td>
                  <td className="text-left">False</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#edit_user_modal"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash-alt"> </i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="user_check"
                    />
                  </td>
                  <td className="text-left">Domnic</td>
                  <td className="text-left">Fernandes</td>
                  <td className="text-left">
                    Domnic.Fernandes@creativecapsule.com
                  </td>
                  <td className="text-left">9813463542</td>
                  <td className="text-left">Varca</td>
                  <td className="text-left">True</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#edit_user_modal"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="user_check"
                    />
                  </td>
                  <td className="text-left">Ivo</td>
                  <td className="text-left">Costa</td>
                  <td className="text-left">Ivo.Costa@creativecapsule.com</td>
                  <td className="text-left">9824463599</td>
                  <td className="text-left">Margao</td>
                  <td className="text-left">True</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#edit_user_modal"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default UserTable;
