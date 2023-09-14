import data from "./Shopdata";
import { Link } from "react-router-dom";
export default function Home() {
  //console.log(data)
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.photo} height="200" width="200" />
            <h2>
              {item.name} : Rs {item.price}
            </h2>
            <Link to={`/${item.id}`}>View</Link>
            <h1></h1>
          </div>
        );
      })}
    </div>
  );
}
