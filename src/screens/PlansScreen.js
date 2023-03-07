import { async } from "@firebase/util";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlansScreen.css";

function PlansScreen() {
  const [products, setProducts] = useState([]);
  // const [prices, setPrices] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const product = query(
        collection(db, "products"),
        where("active", "==", true),
      );
      const querySnapshot = await getDocs(product);

      querySnapshot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();
      });
      setProducts(products);
    };
    getProduct();
  }, [products]);

  console.log("Products from db", products);

  // const loadCheckout = async (pricesId) => {};

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plansScreen__plan">
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button className="plansScreen__subcribe">Subcribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
