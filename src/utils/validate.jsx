export const formValidation = (email, password) => {
  const validateEmail =
    /^([A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/.test(email);
  const validatePassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  // const validateName =
  //   /^(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
  //     name
  //   );

  // if (!validateName) return "Please enter correct full name ";

  if (!validateEmail) {
    return "Please enter a valid email address";
  }
  if (!validatePassword) {
    return "Please enter a valid password";
  }

  return null;
};
