import React, { useState } from 'react'
import AddressInfo from './AddressInfo';
import PersonalInfo from './PersonalInfo';
import usericon from '../../assets/user.png'
const VerifyId = () => {
    const [page, setPage] = useState(1);
    var personalDetailsfilled=false;
    return (
      <div className='verifyid'>
        <h2>Identification Verification</h2>
        <div className=" verifyid-content">
          <div className="tabs">  

              <div className="step">
                <img className={page === 1 ?'current':'form-filled '} src={usericon} alt=''/>
                <button className={page === 1 ?'current':'form-filled '} onClick={() => setPage(1)}>Personal Info</button>
              </div>

            <div className="step">
              <img className={page === 2 ?'current':''} src={usericon} alt=''/>
              <button onClick={() => setPage(2)} className={page === 2 ?'current':' '}  >Address Info</button>              
            </div>
      
          </div>
          {page === 1 ? <PersonalInfo/> : <AddressInfo />}

        </div>
      </div>
    );
}
export default VerifyId;
