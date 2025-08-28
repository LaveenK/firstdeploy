import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function SinglePage() {
  const [user, setUser] = useState([]);
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

  const val = useParams();
  console.log(val);
  const getdata = (url) => {
    return fetch(url, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => res.json());
  };

  const fetchandGetData = async (url) => {
    try {
      setLoad(true);
      const data = await getdata(url);
      setUser(data.data);
      console.log(data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setErr(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchandGetData(`https://reqres.in/api/users/${val.userId}`);
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong...</h1>;
  }
  // {
  //   "id": 1,
  //   "email": "george.bluth@reqres.in",
  //   "first_name": "George",
  //   "last_name": "Bluth",
  //   "avatar": "https://reqres.in/img/faces/1-image.jpg"
  // }

  return (
    <>
      {/* optional chaining */}
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          margin: "20px",
        }}
      >
        <img src={user.avatar} alt="" />
        <h1>Id: {user.id}</h1>
        <h2>Name: {`${user.first_name} ${user.last_name}`}</h2>
        <h3>Email: {user.email}</h3>
        <h4>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris in imperdiet tellus. Vivamus nunc nisi, ullamcorper nec ligula
          aliquam, pulvinar volutpat odio. Ut porta eget turpis vitae iaculis.{" "}
        </h4>
      </div>
    </>
  );
}