import React, { useState } from 'react'
import axios from 'axios';

function HomePage() {
    const [data, setData] = useState({
        url: "",
    });
    const [response, setResponse] = useState(null)
    const setHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const onSubmit = async () => {
        const res = await axios.post("http://localhost:5000/api/postcount", data)
        console.log(res);
        setResponse(res.data)
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

                <table className="table mt-5 ">
                    <thead>
                        <tr className="table-primary" >
                            <th scope="col">No</th>
                            <th scope="col">URL</th>
                            <th scope="col">Count</th>



                        </tr>
                    </thead>
                    <tbody>

                        {/* {
            userdata.map((data,id)=>{
            
            return( */}

             { response ? 
             (
                <>
                            <tr>
                                <th scope="row">1</th>
                                <td>{response.url}</td>
                                <td>{response.words}</td>

                                {/* <td className="d-flex justify-content-between"> */}
                                {/* <Link to={`details/${data._id}`}>  <button className="btn btn-success pt-1"><AiFillEye/></button></Link>  */}
                                {/* <Link to={`edit/${data._id}`}><button className="btn btn-primary pt-1 "><MdModeEditOutline/></button></Link>   */}
                                {/* <button onClick={()=>deleteUser(data._id)} className="btn btn-danger pt-1 "><MdDelete/></button> */}
                                {/* </td> */}

                            </tr>
                        </>
             ) : (
               <>
                <div>
                    <h1>No url</h1>
                </div>
               </>
             )
               

             }
                        
                        {/* )
           
            
            })
          }
             */}


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage