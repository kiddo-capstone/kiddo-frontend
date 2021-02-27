export const cannedData = {
  data: [
    {
      id: "1",
      type: "task",
      attributes: {
        name: "💜 Understanding Feelings",
        description:
          "Every good secret agent needs to understand their emotions. Take 10 minutes to journal your feelings",
        category: "EQ",
        points: 100,
      },
    },
    {
      id: "2",
      type: "task",
      attributes: {
        name: "🧠 IQ Upgrade",
        description:
          "Every agent can increase their own skills with good, hard work. Complete 10 math problems.",
        category: "IQ",
        points: 50,
      },
    },
    {
      id: "3",
      type: "task",
      attributes: {
        name: "🛏️  A Tidy Home Base",
        description:
          "Good rest is one of the most important things for an agent to have. Make sure your bed is ready to sleep in after today's missions.",
        category: "Misc",
        points: 1337,
      },
    },
    {
      id: "4",
      type: "task",
      attributes: {
        name: "test",
        description: "testing",
        category: "test",
        points: 3,
      },
    },
  ],
};

export const missionTasks = {
  data: [
    {
      id: "1",
      type: "task",
      attributes: {
        mission_id: "1",
        task_id: "1",
        message: "I'm Baaack!",
        image_path: "",
        is_completed: false,
        photoIsRequired: true,
      },
    },
    {
      mission_id: "1",
      task_id: "2",
      message: "I'm Baaack!",
      image_path: "",
      is_completed: false,
      photoIsRequired: false,
    },
  ],
};
