import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type EmailRolePair = {
  email: string;
  role: string;
};

const EmailRoleInput: React.FC<{
  index: number;
  value: EmailRolePair;
  onUpdate: (index: number, value: EmailRolePair) => void;
  onRemove: (index: number) => void;
}> = ({ index, value, onUpdate, onRemove }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <input
        type="email"
        placeholder="Add email here"
        value={value.email}
        onChange={(e) => onUpdate(index, { ...value, email: e.target.value })}
        className="border border-gray-300 p-2 rounded flex-1"
      />
      <select
        value={value.role}
        onChange={(e) => onUpdate(index, { ...value, role: e.target.value })}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="admin">Admin</option>
        <option value="member">Member</option>
      </select>
      <button
        onClick={() => onRemove(index)}
        className="bg-red-500 text-white p-2 rounded"
      >
        Remove
      </button>
    </div>
  );
};

const InviteEmailTeam: React.FC = () => {
  const navigate = useNavigate();
  const [emailRoles, setEmailRoles] = useState<EmailRolePair[]>([
    { email: "", role: "member" },
  ]);

  const handleEmailRoleUpdate = (index: number, value: EmailRolePair) => {
    const updatedEmailRoles = [...emailRoles];
    updatedEmailRoles[index] = value;
    setEmailRoles(updatedEmailRoles);
  };

  const handleRemoveEmailRole = (index: number) => {
    const updatedEmailRoles = emailRoles.filter((_, i) => i !== index);
    setEmailRoles(updatedEmailRoles);
  };

  const handleAddAnotherEmailRole = () => {
    setEmailRoles([...emailRoles, { email: "", role: "member" }]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Emails and roles to invite:", emailRoles);
    // Add your submit logic here
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-screen h-screen flex flex-wrap">
        <div className="md:w-3/5 bg-white p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              Who else is on your team?
            </h2>
            {emailRoles.map((pair, index) => (
              <EmailRoleInput
                key={index}
                index={index}
                value={pair}
                onUpdate={handleEmailRoleUpdate}
                onRemove={handleRemoveEmailRole}
              />
            ))}
            <button
              type="button"
              onClick={handleAddAnotherEmailRole}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              + Add another
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            >
              Continue
            </button>
          </form>
        </div>

        <div className="h-screen w-2/5">
          <img
            className="w-full h-full object-cover"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
            alt="Teammates"
          />
        </div>
      </div>
    </div>
  );
};

export default InviteEmailTeam;
