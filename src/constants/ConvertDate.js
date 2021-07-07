export const convertDate = (data) => {
  const getDate = parseInt(data);
  const newDate= new Date(getDate);
  return newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear();
}