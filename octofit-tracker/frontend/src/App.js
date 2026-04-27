import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App bg-light min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Heading */}
        <h1 className="display-4 mb-4 text-primary">Welcome to OctoFit Tracker</h1>

        {/* Card Example */}
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Track Your Fitness Journey</h5>
                <p className="card-text">Log activities, join teams, and climb the leaderboard with OctoFit Tracker!</p>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show Info Modal</button>
              </div>
            </div>
          </div>
        </div>

        {/* Table Example */}
        <div className="row mb-4">
          <div className="col-md-8 offset-md-2">
            <h2 className="h4 mb-3">Sample Activities</h2>
            <table className="table table-striped table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Activity</th>
                  <th>Duration (min)</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Running</td>
                  <td>30</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>Cycling</td>
                  <td>45</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>Yoga</td>
                  <td>60</td>
                  <td>200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bootstrap Link Example */}
        <div className="mb-4">
          <a className="btn btn-outline-primary" href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
            Learn more about Bootstrap
          </a>
        </div>

        {/* Modal Example */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Welcome!</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>This is a Bootstrap modal example. Use modals for important info or forms.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
