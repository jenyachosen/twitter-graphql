const QueryTwitterResolver = {
  currentUser: () => {
    return {
      id: "123",
      name: "Jenya Korol",
      handle: "johndoe",
      coverUrl: "",
      avatarUrl: "",
      createdAt: "",
      updatedAt: "",
    }
  },
  suggestions: () => {
    return []
  },
};

export default QueryTwitterResolver;
