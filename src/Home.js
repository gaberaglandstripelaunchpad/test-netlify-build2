import React from "react";

const products = [
  {
    name: "Test Sub",
    // ID of Price object in Stripe
    priceId: "price_1PK1022eZvKYlo2CDBAu9AFp",
    price: "10",
    period: "month",
    image:  "https://i.imgur.com/EHyR2nP.png",
  },
];

const Product = ({ name, price, priceId, period, image }) => {
  return (
    <div className="product">
      <div className="product-info">
        <img src={image} alt={name} />
        <div className="description">
          <h3>{name}</h3>
          <h5>
            ${price} {period && `/ ${period}`}
          </h5>
        </div>
      </div>
      <form action="/api/create-checkout-session" method="POST">
        {/* Hidden input to pass priceId to our server */}
        <input type="hidden" name="priceId" value={priceId} />
        <button className="button" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default function Page() {
  return (
    <div className="container">
      <div className="logo">My Business</div>
      {/* Loop through your products and display them */}
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </div>
  );
}

