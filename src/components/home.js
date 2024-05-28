import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fire from '../files/firebase';
import '../movie_details.css';

export const Homepage = () => {
    const history = useHistory();
    const location = useLocation();
    const profile = location.state.profile;
    const name = location.state.name;
    const email = location.state.email;
    const password = location.state.password;
    const mobile = location.state.mobile;
    const [moviedata, setmoviedata] = useState([]);

    useEffect(() => {
        fire.firestore().collection("currentmovies").get().then((snapshot) => {
            const movies = [];
            snapshot.forEach(doc => {
                var data = doc.data();
                movies.push({ data: data });
            });
            setmoviedata(movies);
        });
    }, []);

    return (
        <div className="wrapper">
            <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a href="/homepage" className="simple-text logo-normal">
                        FUN TICKETS
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active">
                            <Link to={{ pathname: "/homepage", state: { profile, name, email, password, mobile } }} className="nav-link">
                                <i className="material-icons">home</i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/dashboard", state: { profile, name, email, password, mobile } }} className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/bookings", state: { profile, name, email, password, mobile } }} className="nav-link">
                                <i className="material-icons">content_paste</i>
                                <p>Bookings</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/userprofile", state: { profile, name, email, password, mobile } }} className="nav-link">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/feedback", state: { profile, name, email, password, mobile } }} className="nav-link">
                                <i className="material-icons">notifications</i>
                                <p>Feedback</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/changepassword", state: { profile, name, email, password, mobile } }} className="nav-link">
                                <i className="material-icons">lock</i>
                                <p>Change Password</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                <i className="material-icons">logout</i>
                                <p>Logout</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-wrapper"></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                    </div>
                </nav>
                <div className="row">
                    {moviedata.map((data, index) => (
                        <div className="col-4" key={index} style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <div className="card">
                                <div className="card-img-top img-fluid">
                                    <img src={data.data.image} alt="Movie" style={{ width: '18rem', height: '20rem' }} />
                                </div>
                                <button onClick={() => history.push({ pathname: "/details", state: { ...data.data } })}>
                                    View Details
                                </button>
                                <button onClick={() => history.push({ pathname: "/bookingform", state: { ...data.data, profile, name, email, password, mobile } })}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
