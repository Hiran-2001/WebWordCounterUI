import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { errorToast, successToast } from "./Toast";

function HomePage() {
  const [data, setData] = useState({
    url: "",
  });
  const [response, setResponse] = useState(null);
  const [previous, setPrevious] = useState([]);

  const setHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = async () => {
    try {
      const res = await axios.post("https://webscraper-api-npar.onrender.com/api/postcount", data);
      console.log(res);
      setResponse(res.data);
      fetchData();
    } catch (error) {
      if (error.response.data.status === 400) {
        errorToast(error.response.data);
       
      }
    }
  };

  const fetchData = async () => {
    const res = await axios.get("https://webscraper-api-npar.onrender.com/api/previous");
    if (res) {
      setPrevious(res.data.previous);
      console.log(res.data.previous);
    }
  };

  useEffect(() => {
    fetchData();

  }, []);

  const onDelete = async (id) => {
    try {
      const res = await axios.delete(`https://webscraper-api-npar.onrender.com/api/delete/${id}`);
      successToast(res.data.message);
    } catch (error) {}

    fetchData();
    
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
        <div className="add_btn"></div>

        {response ? (
          <div style={{ backgroundColor: "red" }}>
            <table className="table mt-5 ">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Domain Name</th>
                  <th scope="col">word</th>
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
        ) : (
          <></>
        )}

        <div style={{ marginTop: "20px" }} className="history">
          <h3 className="">History</h3>

          <table className="table mt-2 ">
            <thead>
              <tr className="table-primary">
                <th scope="col">No</th>
                <th scope="col">Domain Name</th>
                <th scope="col">word Count</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <ToastContainer />
              {previous ? (
                previous.map((e, id) => {
                  return (
                    <>
                      <tr>
                        <td>{id + 1}</td>
                        <td>{e.url}</td>
                        <td>{e.words}</td>
                        <td>
                          <button
                            onClick={() => onDelete(e._id)}
                            className="btn btn-danger pt-1 "
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
