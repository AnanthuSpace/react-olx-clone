import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../Store/FirebaseContext";
import { userContext } from "../Store/userContext";
import "../../public/Create.css";
import Header from "./Header";

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(userContext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmition = async () => {
    if (name.length === 0 || category.length === 0 || price <= 0 || !image) {
      toast.error("Fill all fields for upload", { autoClose: false });
    } else {
      try {
        const storage = getStorage(firebase);
        const reference_storage = ref(storage, `/image/${image.name}`);
        const snapshot = await uploadBytes(reference_storage, image);
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log(downloadURL);

        const fireDB = getFirestore(firebase);
        const collectionRef = collection(fireDB, "products");
        const date = new Date().toLocaleDateString();
        const productDetails = {
          userID: user.uid,
          name: name,
          category: category,
          price: price,
          imageURL: downloadURL,
          createAt: date.toString(),
        };

        console.log("Uploading product details:", productDetails);
        await addDoc(collectionRef, productDetails);
        toast.success("Product added successfully", {
          autoClose: 2500,
          hideProgressBar: true,
        });
        setTimeout(() => navigate("/"), 2500);
      } catch (error) {
        console.error("Error adding product:", error);
        toast.error("Failed to add product. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="parentContainer">
        <div className="centerDiv">
          <label className="label" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="label" htmlFor="category">
            Category
          </label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label className="label" htmlFor="price">
            Price
          </label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          />
          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button className="uploadBtn" onClick={handleSubmition}>
            Upload and Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Create;
