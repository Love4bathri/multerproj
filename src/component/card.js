import React, { useEffect, useState } from 'react';
import axios from 'axios';
 

function Card() {
  const [cards, setCards] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // for modal

  useEffect(() => {
    axios.get('http://localhost:8000/api/role')
      .then(res => setCards(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="app1-container">
      <div className="form1-box">
        {cards.map((item, index) => (
          <div className="card mb-3" style={{ maxWidth: '540px' }} key={index}>
            <div className="row g-0">
              <div className="col-md-4">
                <img 
                  src={`http://localhost:8000/uploads/${item.filenameDb}`} 
                  className="img-fluid rounded-start zoomable-img"
                  alt={item.name}
                  onClick={() => setSelectedImage(`http://localhost:8000/uploads/${item.filenameDb}`)}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">This a is a wider card with supporting text.</p>
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
