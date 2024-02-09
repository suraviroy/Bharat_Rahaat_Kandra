import React, { useState } from "react";
import "./agencydb.css";
import { Link } from 'react-router-dom';
import '../ShelterShifting/ShelterShifting';
import { useNavigate } from 'react-router-dom';

const Agencydb = () => {

  const [data, setData] = React.useState(localStorage.getItem('id'));

  const [formData, setFormData] = useState({
    agencyName: "",
    address: "",
    phoneNumber: "",
    email: "",
    personName: "",
    personTitle: "",
    agencyType: "",
    agencyTypeOther: "",
    resources: [],
    resourceQuantities: {},
    shelterOccupancy: "",
  });
  const resources = {
    resources: formData.resources,
  };
  const resourceQuantities = {
    resourceQuantities: formData.resourceQuantities,
  };
  const shelterOccupancy = {
    shelterOccupancy: formData.shelterOccupancy,
  };

  React.useEffect(() => {
    console.log("storU " + data);
  }, [data])

  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleResourceChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        resources: [...formData.resources, name],
      });
    } else {
      setFormData({
        ...formData,
        resources: formData.resources.filter((resource) => resource !== name),
        resourceQuantities: {
          ...formData.resourceQuantities,
          [name]: undefined, // Reset quantity when unchecked
        },
      });
    }
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      resourceQuantities: {
        ...formData.resourceQuantities,
        [name]: value,
      },
    });
  };

  const handleSave211 = () => {
    // Handle navigation to the next page or submit data as needed
    console.log(formData);
  };
  const Navigate = useNavigate();

  const handleSave21 = async (event) => {

    event.preventDefault();
    const response = await fetch('http://localhost:8080/userRouter/database', {
      method: 'POST',
      body: JSON.stringify({ data ,resources,resourceQuantities,shelterOccupancy}),
      // body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data1 = await response.json();
    console.log(data1);
    console.log(formData);
    Navigate("/ShelterShiftingMain")
    //handleSave211();
    // alert(data1.message);
  };

  return (
    <div className="body21">
      <div className="form56">
        <h2 className="title56">1. General Information</h2>
        <form>
          {/* General Information fields */}
          <label className="head45">Agency Name:</label>
          <input className="input567"
            type="text"
            name="agencyName"
            value={formData.agencyName}
            onChange={handleInputChange}
          />
          <label className="head45">Address</label>
          <input className="input567"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <label className="head45">phone Number:</label>
          <input className="input567"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />

          <label className="head45">Email:</label>
          <input className="input567"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />


          {/* Add similar input fields for other General Information fields */}

          <label className="head45">Agency Type:</label>
          <select className="sel345"
            name="agencyType"
            value={formData.agencyType}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="shelter">Rescue</option>
            <option value="police station">Police Station</option>
            <option value="fire station">Fire Station</option>
            <option value="ambulance">Ambulance</option>
            <option value="hospital">Hospital</option>
            <option value="doctor">Doctor</option>
            <option value="reporter">Reporter</option>
            <option value="others">Others</option>
          </select>
          {formData.agencyType === "others" && (
            <input className="input56"
              type="text"
              name="agencyTypeOther"
              value={formData.agencyTypeOther}
              onChange={handleInputChange}
              placeholder="Specify Other Agency Type"
            />
          )}
        </form>

        {formData.agencyType === "shelter" && (
          <>
            <h2 className="title56">2. Resource Inventory</h2>
            <form>
              {/* Checkboxes for resource selection */}
              <label className="label45">
                <input className="input56"
                  type="checkbox"
                  name="cots"
                  checked={formData.resources.includes("cots")}
                  onChange={handleResourceChange}
                />
                Cots
              </label>
              <label className="label45">
                <input className="input56"
                  type="checkbox"
                  name="food"
                  checked={formData.resources.includes("food")}
                  onChange={handleResourceChange}
                />
                Food
              </label>
              <label className="label45">
                <input className="input56"
                  type="checkbox"
                  name="water"
                  checked={formData.resources.includes("water")}
                  onChange={handleResourceChange}
                />
                Water
              </label>
              <label className="label45">
                <input className="input56"
                  type="checkbox"
                  name="blanket"
                  checked={formData.resources.includes("blanket")}
                  onChange={handleResourceChange}
                />
                Blanket
              </label>
              <label className="label45" >
                <input className="input56"
                  type="checkbox"
                  name="others"
                  checked={formData.resources.includes("others")}
                  onChange={handleResourceChange}
                />
                Others
              </label>
              {/* Add checkboxes for other resources */}
            </form>

            <h2 className="title56">3. Quantity of Each Resource Available</h2>
            <form>
              {formData.resources.map((resource) => (
                <div key={resource}>
                  <label className="label45">{resource} Quantity:</label>
                  <input className="cl789"
                    type="text"
                    name={resource}
                    value={formData.resourceQuantities[resource] || ""}
                    onChange={handleQuantityChange}
                  />

                </div>
              ))}
              {formData.resources.includes("others") && (
                <div>
                  <label className="label45">Other Resources:</label>
                  <input className="cl890"
                    type="text"
                    name="otherResources"
                    value={formData.resourceQuantities.otherResources || ""}
                    onChange={handleQuantityChange}
                    placeholder="Specify Other Resources"
                  />
                </div>
              )}
            </form>
            <h2 className="title56">4. Shelter Occupancy</h2>
            <form>
              <label className="label45">Please add the number of shelters can be provided:</label>
              <input className="cl123"
                type="number"
                name="shelterOccupancy"
                value={formData.shelterOccupancy}
                onChange={handleInputChange}
              />
            </form>
          </>
        )}
        <Link to="/ShelterShiftingMain">
          <button className="button215" onClick={handleSave21}>Save and next</button>
        </Link>

      </div>
    </div>

  );
};

export default Agencydb;
