import Sidebar from '../../AdminComponents/Sidebar/Sidebar'
import Topbar from '../../AdminComponents/Topbar/Topbar'
import './AddUser.css'

const AddUser=()=>{
    return(
        <div>
            <Topbar/>
            <div className="adduser_container">
                <Sidebar/>
                <div className="add_user">
                    <h1 className="add_user_title">Add User</h1>
                    <form className="add_user_form">
                        <div className="add_user_item">
                            <label>Username</label>
                            <input type="text" placeholder='Username' className="add_user_input" />
                        </div>
                        <div className="add_user_item">
                            <label>Fullname</label>
                            <input type="text" placeholder='Fullname' className="add_user_input" />
                        </div>
                        <div className="add_user_item">
                            <label>Password</label>
                            <input type="text" placeholder='Password' className="add_user_input" />
                        </div>
                        <div className="add_user_item">
                            <label>E-mail</label>
                            <input type="text" placeholder='E-mail' className="add_user_input" />
                        </div>
                        <div className="add_user_item">
                            <label>Phone</label>
                            <input type="text" placeholder='Phone' className="add_user_input" />
                        </div>
                        <div className="add_user_item">
                            <label>Address</label>
                            <input type="text" placeholder='Address' className="add_user_input" />
                        </div>
                        <div className="add_user_item">
                            <label >Gender</label>
                        <div className="add_user_gender">
                        <input type="radio" name='Male' id='Male' value="Male"  className="add_user_input_gender" />   
                        <label htmlFor="Male">Male</label>

                        <input type="radio" name='Female' id='Female' value="Female"  className="add_user_input_gender" />   
                        <label htmlFor="Female">Female</label>

                        <input type="radio" name='Others' id='Others' value="Others"  className="add_user_input_gender" />   
                        <label htmlFor="Others">Others</label>
                        </div>
                        </div>
                        <button className="add_user_button">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser