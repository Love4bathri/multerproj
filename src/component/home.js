import React, {lazy, Suspense} from 'react';
import ImageUpload from './imageupload';
import SendEmail from './sendemail';
const Card = lazy(() => import('./card'));
 
 
function Home() {
  return (
    <div>
    <div className="container my-4 h-40">
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    
    <div className="carousel-indicators">
      {[0, 1, 2].map(i => (
        <button key={i} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0} aria-label={`Slide ${i + 1}`} />
      ))}
    </div>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./img/1.jpg" className="d-block w-100 img-fluid" alt="Slide 2" />
        <div className="carousel-caption d-none d-md-block">
          <h5>First Slide</h5>
          <p>Multer</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src="./img/1.jpg" className="d-block w-100 img-fluid" alt="Slide 2" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second Slide</h5>
          <p>nodemailer</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src="./img/3.png" className="d-block w-100 img-fluid" alt="Slide 3" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third Slide</h5>
          <p> final slide.</p>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
         <ImageUpload/>    
          <Suspense fallback={<div>Loading...</div>}>
          <Card/>
          </Suspense>
        <SendEmail/>
  </div>
  )
}

export default Home;