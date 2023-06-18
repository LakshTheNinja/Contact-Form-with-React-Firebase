import React ,{useState, useStatefrom} from "react";

const ReactContact = () => {

    const [user, setUser]=useState(
        {
            name:"",
            phoone:"",
            address:"",
            email:""

        }
    );

    let name,value;
    const getUserData = (event) =>
    {
        name=event.target.name;
         value=event.target.value;

      setUser({ ...user,[name]: value});


    };



    const postData = async(e) =>
    {
        e.preventDefault();
        const {name, phoone,address,email}=user;
        const res=  await fetch('https://reactform-cfcec-default-rtdb.firebaseio.com/reactformdata.json',{
            method:"POST",
            headers :{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                phoone,
                address,
                email

            })
        });

        if(res)
        {
            setUser(
                {
                    name:"",
                    phoone:"",
                    address:"",
                    email:""
        
                }
            );

            alert("Data stored succesfully");
        }



    };

    return(
        <>
      <div className ="container-contact100">
        <div className="wrap-contract100">
            <form className ="contact100-form" method="POST">
                <span className ="contact100-form-title">Contact Us</span>

                <div className ="wrap-input100 rs1-wrap-input100">
                    <span className="label-input100">Your Name</span>
                    <textarea
                    className ="input100"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={user.name}
                    onChange={getUserData}
                    autoComplete="off"
                    ></textarea>
                 
                  
                    <span className="focus-input100"></span>
                    </div>

                    <div className ="wrap-input100 rs1-wrap-input100">
                    <span className="label-input100">Your Email</span>
                    <textarea
                    className ="input100"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email Id"
                     value={user.email}
                     onChange={getUserData}
                     autoComplete="off"
                     
                    ></textarea>
                    
               
                    <span className="focus-input100"></span>
                    </div>


                    <div className ="wrap-input100 rs1-wrap-input100">
                    <span className="label-input100">Your Mobile Number</span>
                    <textarea
                    className ="input100"
                    type="text"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    value={user.phoone}
                    onChange={getUserData}
                    autoComplete="off"
                    ></textarea>
                  
                    <span className="focus-input100"></span>
                    </div>

                    <div className ="wrap-input100 rs1-wrap-input100">
                    <span className="label-input100">Your Address</span>
                    <textarea
                    className ="input100"
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    value={user.address}
                    onChange={getUserData}
                    autoComplete="off"
                    ></textarea>
                    
                    <span className="focus-input100"></span>
                    </div>

                    <div className ="container-contact100-form-btn">
                        <button className="contact100-form-btn" onClick={postData} >
                            <span>
                                Submit
                                <i className="fa fa-long-arrow-right m-l-7"
                                aria-hidden="true"></i>
                            </span>
                        </button>
                </div>
            </form>
        </div>
      </div>
      
        </>
    );

};

export default ReactContact;