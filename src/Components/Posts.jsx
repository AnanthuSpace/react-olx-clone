import { useEffect, useContext, useState } from "react";

import Heart from "../assets/Heart";
import "../../public/Posts.css";
import { FirebaseContext } from "../Store/FirebaseContext";
import { PostContext } from "../Store/viewContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const { setPostDetails } = useContext(PostContext);
  const [products, setProducts] = useState([]);
  const fireDB = getFirestore(firebase);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(fireDB, "products");
      const snapShot = await getDocs(productsCollection);
      const allProducts = snapShot.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      console.log(allProducts);
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="card"
                onClick={() => {
                  setPostDetails(product);
                  console.log(product.name);
                  navigate("/view-post");
                }}
              >
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={product.imageURL} alt="bike" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9;{product.price}.00</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
