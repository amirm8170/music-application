const validation = (name: string, value: string) => {
  const nameRegex = /^([a-zA-Z ]){2,30}$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  switch (name) {
    case "fullName":
      if (!value.length) {
        return "required field" ;
    }
    if (!nameRegex.test(value)) {
          return "invalid name";
      }
      break;
    case "email":
      if (!value.length) {
        return "required field";
      }
      if (!emailRegex.test(value)) {
        return "invalid email";
      }
      break;
    case "password":
      if (!value.length) {
        return "required field";
      }
      if ((value.length > 0 && value.length < 6) || value.length > 150) {
        return "invalid password";
      }
      break;
    case "username":
      if (!value.length) {
        return "required field";
      }
      if (value.length > 150) {
        return "invalid username";
      }
      break;
  }
};

export default validation;
