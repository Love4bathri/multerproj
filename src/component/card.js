import React, { useEffect, useState } from 'react';
import axios from 'axios';
 

function Card() {
  const [cards, setCards] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // for modal

  useEffect(() => {
    axios.get('https://multerproj-3.onrender.com/api/role')
      .then(res => setCards(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handleDelete = async (id) =>{
    try{
      await axios.delete(`https://multerproj-3.onrender.com/api/role/${id}`);
      setCards(cards.filter(card => card._id !== id));

    }catch(err){
      console.error("Error deleting card:", err);
    }
  }
  return (
    <div className="app1-container">
  <div className="form1-box">
    {cards.map((item, index) => (
      <div
        className="card mb-3 position-relative"
        style={{ maxWidth: "540px" }}
        key={index}
      >
        {/* Cross Button */}
        <button
          className="btn-close position-absolute"
          style={{ top: "5px", right: "5px" }}
          onClick={() => {handleDelete(item._id);
            // Yaha apni delete/remove logic lagao
            console.log("Remove card:", index);
          }}
        ></button>

        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://multerproj-3.onrender.com/uploads/${item.filenameDb}`}
              className="img-fluid rounded-start zoomable-img"
              alt={item.name}
              onClick={() =>
                setSelectedImage(
                  `https://multerproj-3.onrender.com/uploads/${item.filenameDb}`
                )
              }
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                This is a wider card with supporting text.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated just now</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}

    {/* Image Modal */}
    {selectedImage && (
      <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
        <div className="modal-content">
          <img src={selectedImage} alt="Zoomed" />
        </div>
      </div>
    )}
  </div>
</div>

  );
}

export default Card;
