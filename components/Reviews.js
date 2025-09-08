'use client';

import Image from 'next/image';

const Reviews = () => {
  return (
    <section className="reviews-section">
      <p className="rating">4.7 from 10,000+ reviews</p>
      <h1>We love our customers and it seems the feeling is mutual</h1>

      <div className="review-images">
        <div className="review-image-card">
          <Image 
            src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1737102076/gwim3wi0wqc5akfv9dlc.webp?w=1080&q=75"
            alt="Customer at store"
            width={1080}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="review-image-card">
          <Image 
            src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1737102132/lmtyi1k3j5tmhwzh5lto.webp?w=1080&q=75"
            alt="Customer interaction"
            width={1080}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="review-cards">
        <div className="review-card">
          <div className="stars">★★★★★</div>
          <h3>Overall outstanding!</h3>
          <p>Love the product, exactly as described but what I loved more was the easy and efficient order process. Delivery was quick and communication regarding the order process and delivery ETA was prompt and friendly. Very impressed by you, Kitchen Warehouse, thanks!</p>
          <span className="author">Julie K.</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <h3>High quality bakeware at competitive prices</h3>
          <p>Products delivered to your door if you do not have a retail store nearby. Excellent follow up and customer service! I have used Kitchen Warehouse to source specialised baking pans not available in my local stores. The baking pans wash easily and deliver outstanding results. These days the price point is also important, and I am always pleasantly surprised. Keep up the good work!</p>
          <span className="author">Muriel S.</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <h3>Online ordering was a breeze</h3>
          <p>Kitchen Warehouse’s online ordering was a breeze! Once my order was placed, the regular updates on its progress, and the exceptionally fast delivery (two days after the order was placed) more than exceeded my expectations!</p>
          <span className="author">Noelle W.</span>
        </div>

        <div className="review-card">
          <div className="stars">★★★★★</div>
          <h3>Excellent service and product</h3>
          <p>I recently ordered a baking item from this shop and couldn’t be happier with the entire experience. The ordering process was smooth and straightforward, and I received the item promptly, exactly as promised. It arrived in perfect condition, well-packaged, and just as described. I’m thoroughly happy with both the product and the service - highly recommended!</p>
          <span className="author">Kathy S.</span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
