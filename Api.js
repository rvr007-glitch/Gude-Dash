export const getComments = async () => {
  return [
    {
      id: "1",
      body: "I want to join this project",
      username: "Pragati",
      userId: "1",
      parentId: null,
      imgUrl: "https://i.ibb.co/Rpxmd5S/girlanim.jpg",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "So we now have 2 members ",
      username: "Shivam",
      userId: "2",

      parentId: null,
      imgUrl: "https://i.ibb.co/3ynJRVZ/its.jpg",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Yeah Sure Why Not",
      username: "Shivam",
      userId: "2",
      parentId: "1",
      imgUrl: "https://i.ibb.co/3ynJRVZ/its.jpg",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Need One more Team Member Atleast",
      username: "Pragati",
      userId: "4",
      parentId: "2",
      imgUrl: "https://i.ibb.co/Rpxmd5S/girlanim.jpg",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Yeah waiting for that only then we will start",
      username: "Shivam",
      userId: "2",
      parentId: "2",
      imgUrl: "https://i.ibb.co/3ynJRVZ/its.jpg",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
   
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Ankit",
    imgUrl:"https://i.ibb.co/tBZ3SCn/minions.jpg",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};