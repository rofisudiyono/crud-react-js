let initialState = {
  users: [
    {
      id: 1,
      name: "Rofi Sudiyono",
      address: "Banyuwangi",
      age: "29",
      phone: "08113500090",
    },
    {
      id: 2,
      name: "Rina Purwita",
      address: "Banyuwangi",
      age: "28",
      phone: "08113500099",
    },
    {
      id: 3,
      name: "Aulian Akbar",
      address: "Banyuwangi",
      age: "2",
      phone: "08113500089",
    },
  ],
  title: "Learn CRUD React Js",
  error: false,
};

const users = (state = initialState, action) => {
  return state;
};

export default users;
