import React, { useState } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState({
    url: "",
  });
  const [response, setResponse] = useState(null);
  const setHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/postcount", data);
    console.log(res);
    setResponse(res.data);
  };

  return (
    <div>
      <div style={{ paddingTop: "50px" }}>
        <h3>Webpage Scraper</h3>
        <div
          style={{
            display: "flex",
            height: "50px",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            onChange={setHandler}
            value={data.url}
            name="url"
            className="form-control"
            style={{ width: "50%" }}
          />
          <button onClick={onSubmit} className="btn btn-primary">
            Get Count
          </button>
        </div>
      </div>
      <div className="container">
        <div className="add_btn">
          {/* <Link to='/register'><button className="btn btn-primary" > Add User</button>   </Link>  */}
        </div>



            {response ? (
        <table className="table mt-5 ">
          <thead>
            <tr className="table-primary">
              <th scope="col">Domain Name</th>
              <th scope="col">word Count</th>
            </tr>
          </thead>
          <tbody>

              <>
                <tr>
                  <td>{response.url}</td>
                  <td>{response.words}</td>

                </tr>
              </>

          </tbody>
        </table>
            ) : (
              <>
                <div>
                  <h1>No url</h1>
                </div>
              </>
            )}

            <table className="table mt-5 ">
          <thead>
            <tr className="table-primary">
              <th scope="col">Domain Name</th>
              <th scope="col">word Count</th>
            </tr>
          </thead>
          <tbody>

              <>
                <tr>
                  <td>{response.url}</td>
                  <td>{response.words}</td>

                </tr>
              </>

          </tbody>
        </table>

        
      </div>
    </div>
  );
}

export default HomePage;
