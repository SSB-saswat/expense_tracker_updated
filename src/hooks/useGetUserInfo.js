// return an object containing all the info present in the local storage as the data present in the local storgae would be present in string. but this hook will return this string data in object

export const useGetUserInfo = () => {
  const { userID, name, profilePhoto, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );

  return { userID, name, profilePhoto, isAuth };
};
