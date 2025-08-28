//import { use } from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

export default function User() {
  const [user, setUser] = useState([]);
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

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
      //console.log(data);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setErr(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchandGetData("https://reqres.in/api/users");
  }, []);
  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong...</h1>;
  }

  //    {
  //       "id": 1,
  //       "email": "george.bluth@reqres.in",
  //       "first_name": "George",
  //       "last_name": "Bluth",
  //       "avatar": "https://reqres.in/img/faces/1-image.jpg"
  //     }

  return (
    <>
      {/* ? Optional chaning */}
      {user?.map((el) => {
        return (
          <div
            style={{
              border: "1px solid black",
              padding: "20px",
              margin: "20px",
            }}
          >
            <img src={el.avatar} alt="" />
            <h2>Id: {el.id}</h2>
            <h3>Name: {`${el.first_name} ${el.last_name}`}</h3>
            <Link to={`/user/${el.id}`}>More Info</Link>
          </div>
        );
      })}
    </>
  );
}
