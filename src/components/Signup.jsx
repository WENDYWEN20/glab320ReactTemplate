import { useState } from "react";
function SignUpForm() {
  //State hooks to manage from data
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState({ tutor: false, tutee: false });

  //form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName)
    console.log(email)


    
  };
}
