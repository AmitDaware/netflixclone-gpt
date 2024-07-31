export const checkValidData = (email, password) => {
//   const isNameValid = /^[A-Za-zà-ÿÀ-ß]+([ '-][A-Za-zà-ÿÀ-ß]+)*$/.test(namee);

  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "PassWord is not Valid";
  return null;
};
