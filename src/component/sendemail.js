import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // For icons;
import axios from 'axios';


const SendEmail = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    });
    const [msg, setMsg] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    async function handlesubmit() {
        console.log("Data submitted:", data);
        const { name, email, password, repeatPassword } = data;
        if (!name || !email || !password || !repeatPassword) {
            setMsg("Please fill all the fields");
            return;
        }
        if (password !== repeatPassword) {
            setMsg("Passwords do not match");
            return;
        }

        setMsg("Data submitted successfully");

        setTimeout(() => {
            setMsg("");
        }, 2000);
        // Clear previous messages
        try {
            const response = await axios.post("https://multerproj-3.onrender.com/api/email", data);
            console.log("Response:", response.data);
            setMsg("Data submitted successfully");
            setData({
                name: "",
                email: "",
                password: "",
                repeatPassword: ""
            });
        } catch (err) {
            console.error("Error submitting data:", err);
            setMsg("Error submitting data");
        }
    }
    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <section style={{ backgroundColor: '#eee', borderRadius: '20px' }}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12">
                        <div className="card text-black" style={{ borderRadius: '20px' }}>
                            <div className="card-body p-4">
                                <div className="row justify-content-center">

                                    {/* Form Section */}
                                    <div className="col-md-12 col-lg-6 order-2 order-lg-1">
                                        <p className="text-center h3 fw-bold mb-4">Sign up</p>
                                        {msg && <div className="alert alert-danger">{msg}</div>}
                                        <form>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-user fa-sm me-2"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={data.name}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="name">Your Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-envelope fa-sm me-2"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={data.email}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="email">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-lock fa-sm me-2"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        value={data.password}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fas fa-key fa-sm me-2"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="repeatPassword"
                                                        name="repeatPassword"
                                                        value={data.repeatPassword}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="repeatPassword">Repeat password</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-3">
                                                <input className="form-check-input me-2" type="checkbox" id="terms" />
                                                <label className="form-check-label" htmlFor="terms">
                                                    I agree to the <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" onClick={handlesubmit} className="btn btn-primary btn-sm px-4">Register</button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* Image Section */}
                                    <div className="col-md-12 col-lg-6 d-flex align-items-center justify-content-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid"
                                            style={{ maxHeight: '250px', width: 'auto' }}
                                            alt="Signup"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default SendEmail;
