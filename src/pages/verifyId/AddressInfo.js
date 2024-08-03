import React, { useState } from 'react' 
import './VerifyId.css'

const AddressInfo = () => {
  
  return (
    <div className="verify-info">

      <h2>Address Info</h2>
      <form>
          <label>country
            <select name="country">
              <option value="select">Select</option>
            </select>
          </label>

          <label>Region
            <select name="region">
              <option value="select">Select</option>
            </select>
          </label>

          <label>Zone/sub-city
            <input type="text" name="zone" value="Finfinnee" />
          </label>

          <label>City
            <input type="text" name="city" value="Finfinnee" />
          </label>

          <label>Woreda
            <input type="text" name="woreda" />
          </label>

          <label>Kebele
            <input type="text" name="kebele" value="02" />
          </label>
          <label>House number
            <input type="text" name="houseNumber" />
          </label>

          <label>Street address
            <input type="text" name="streetAddress" />
          </label>

          <div className='address-type'>
          <div className="address-type-duration ">
            <p>Address type</p>
            <label>Commercial
              <input type="radio" name="addressDuration" value="permanent" defaultChecked />
            </label>
            <label>Residential
              <input type="radio" name="addressDuration" value="temporary" /> 
            </label>
            </div>

          <div className="address-type-duration ">
            <p>Address duration</p>
            <label>Permanent
              <input type="radio" name="addressDuration" value="permanent" defaultChecked />
            </label>
            <label>Temporary
              <input type="radio" name="addressDuration" value="temporary" /> 
            </label>

          </div>
          </div>

          <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default AddressInfo;
 