import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
             <div className="container py-5 mb5">
    <h1 className="mb-5">BOARD LISTs</h1>

    <div className="row">
      <div className="col-md-3">
        <form className="mb-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search"/>
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>

        <div className="list-group">
          <a href="/" className="list-group-item list-group-item-action active"> Dashboard </a>
          <a href="/" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            Inbox
            <span className="badge badge-primary badge-pill ml-auto">new</span>
          </a>
          <a href="/" className="list-group-item list-group-item-action">Orders</a>
          <a href="/" className="list-group-item list-group-item-action">Products</a>
          <a href="/" className="list-group-item list-group-item-action">Customers</a>
          <a href="/" className="list-group-item list-group-item-action">Reports</a>
        </div>
      </div>
      <div className="col-md-9">

        <div className="row d-none">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title
                  and make up the bulk of the card's content.
                </p>
                {/* <!--<a href="#!" className="btn btn-primary">Go somewhere</a>--> */}
              </div>
            </div>
          </div>
        </div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row">1</th>
              <td>
                <a href="/">
                  Some item on your list
                </a>
              </td>
              <td>
                <a href="/" className="btn btn-sm btn-primary my-1 my-sm-0">
                  <span className="fas fa-edit mr-1">Edit</span>
                  </a>
                <a href="/" className="btn btn-sm btn-danger my-1 my-sm-0">
                  <span className="fas fa-trash mr-1">Delete</span>
                  </a>
              </td>
            </tr>


          </tbody>
        </table>

        {/* 글 번호 넘기기 */}
        <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <span className="page-link">Previous</span>
    </li>
    <li className="page-item">
      <a className="page-link" href="#!">1</a>
    </li>
    <li className="page-item active">
      <span className="page-link">
        2
        <span className="sr-only">(current)</span>
      </span>
    </li>
    <li className="page-item">
      <a className="page-link" href="#!">3</a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#!">Next</a>
    </li>
  </ul>
</nav>
      </div>
    </div>

  </div>
   
            </div>
        );
    }
}

export default List