import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../Store/FirebaseContext";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { PostContext } from "../Store/viewContext";
import "../../public/View.css";
function View() {
  const [userData, setUserData] = useState("");
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const fetchUserData = async () => {
      const { userID } = postDetails;
      const database = getFirestore(firebase);
      const usersCollection = collection(database, "users");
      const userQuery = query(usersCollection, where("id", "==", userID));

      try {
        const snapShot = await getDocs(userQuery);
        if (!snapShot.empty) {
          const userDoc = snapShot.docs[0]; // Assuming there's only one matching user
          setUserData(userDoc.data());
        } else {
          console.warn("No user data found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails ? `${postDetails.imageURL}` : ""} alt="image" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}.00</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>Name : {userData ? userData.username : ""}</p>
          <p>Contact : {userData ? userData.phone : ""}</p>
          <p>Email : {userData ? userData.email : ""}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
