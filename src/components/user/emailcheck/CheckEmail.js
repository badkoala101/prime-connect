import Title from '../title/Title';
import './CheckEmail.css'
import '../user.css'
const CheckEmail = () => {
  return (
    <div className=" container">
        <div className='Content'>
        <Title title="Check your email" description="We’ve sent instructions on how to reset your password to em****@gmail.com"/>
        <a href="/login" className="back-link">Go back to log in</a>

        </div>
    </div>
  );
};


export default CheckEmail;
