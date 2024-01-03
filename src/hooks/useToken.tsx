
export const useToken = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return { token };
};
