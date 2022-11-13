import Button from "../../Ui-Component/Button";
import React from "react";
import "./SideDrawerForm.css";
import Input from "../../Ui-Component/Input";
const SideDrawerForm = ({ isEdit, setIsDrawerOpen ,setIsEdit}) => {

  const handelDrawerClose = ()=>{
   setIsDrawerOpen(false)
   setIsEdit(false)
  }
  return (
    <div>
      <div className="form-feileds">
        <label htmlFor="user">User</label>
        <Input type="text" name="name" value="value" />
        <br />
        <label htmlFor="invitCode">Invite Code</label>
        <Input type="text" name="name" value="value" />
        <br />
        <label htmlFor="maxInvites">Max Invites</label>
        <Input type="number" name="name" value="value" />
        <br />
        {!isEdit ? (
          ""
        ) : (
          <>
            <label htmlFor="maxInvites">Stause</label>
            <Input type="number" name="name" value="value" />
            <br />
          </>
        )}
      </div>

      <div className="btn-div">
        {!isEdit ? <Button className="button1" onClick={()=> setIsDrawerOpen(false)}>
            Add Code
          </Button>:
          <Button  className="button1" onClick={handelDrawerClose}>Update </Button>
       }
      </div>
    </div>
  );
};

export default SideDrawerForm;
