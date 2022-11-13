import Button from "../../Ui-Component/Button";
import React from "react";
import "./SideDrawerForm.css";
import Input from "../../Ui-Component/Input";
const SideDrawerForm = ({isEdit}) => {
  return (
    <div>
      <div className="form-feileds">
        <label htmlFor="user">User</label>
        <Input type='text'name='name' value='value' />
        <br />
        <label htmlFor="invitCode">Invite Code</label>
        <Input type='text'name='name' value='value'/>
        <br />
        <label htmlFor="maxInvites">Max Invites</label>
        <Input type='number'name='name' value='value'/>
        <br />
        {!isEdit ? "" :<>
        <label htmlFor="maxInvites">Stause</label>
        <Input type='number'name='name' value='value'/>
        <br />
        </> }
      </div>

      <div className="btn-div">
        <Button className='button1'>Add Code</Button>
      </div>
    </div>
  );
};

export default SideDrawerForm;
