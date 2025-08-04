 
import React, { useState , useRef} from 'react';
import axios from 'axios';


function ImageUpload() {
    const [formData, setFormData] = useState({
    img: "",
    name: ""
  });
  const [msg, setMsg] = useState("");
  const fileRef = useRef();


  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "img") {
      setFormData(prev => ({ ...prev, img: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }
 
  async function handleSubmit() {
    const data = new FormData();
    data.append("img", formData.img)
    data.append("name", formData.name)
    try {
 const upload = await axios.post("https://multerproj-3.onrender.com/api/role", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }

      })
      setMsg("File uploaded successfully 👍👍👍");
      //clear the form data
      setFormData({
        img: "",
        name: ""
      });
//clear the file input
      fileRef.current.value = null;
      //set time out
      setTimeout(() => {
        setMsg("");
      }, 3000);

      console.log(upload.data);
    } catch (err) {
      console.error("Error uploading file:", err);
      setMsg("Error uploading file");
    }


  }
  return (
     
    <div className="app-container">
      <div className="form-box">
        <h1 className="fade-in">📤 Upload Image</h1>

        <input type="file" name="img" ref={fileRef} onChange={handleChange} className="input-file" />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="input-text"
        />

        <button onClick={handleSubmit} className="submit-btn">🚀 Submit</button>

        {msg && (
          <p className={`message fade-in ${msg.includes("✅") ? "success" : "error"}`}>
            {msg}
          </p>
        )}
      </div>
    </div>
  )
}

export default ImageUpload;