import React from "react";
import Comments from "./Comments";

const CommentContainer = () => {
  const commentsData = [
    {
      name: "Akshay",
      text: "Welcome to Namaste React",
      replies: [
        {
          name: "Akshay",
          text: "I liked your Namaste React Tutorial",
          replies: [],
        },
        {
          name: "Ravi",
          text: "Thanks for teaching us",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay",
      text: "Welcome to Namaste React",
      replies: [
        {
          name: "Akshay",
          text: "Welcome to Namaste React",
          replies: [],
        },
        {
          name: "Akshay",
          text: "Welcome to Namaste React",
          replies: [
            {
              name: "Akshay",
              text: "Welcome to Namaste React",
              replies: [
                {
                  name: "Akshay",
                  text: "Welcome to Namaste React",
                  replies: [
                    {
                      name: "Akshay",
                      text: "Welcome to Namaste React",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Akshay",
              text: "Welcome to Namaste React",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay",
      text: "Welcome to Namaste React",
      replies: [],
    },
    {
      name: "Akshay",
      text: "Welcome to Namaste React",
      replies: [],
    },
    {
      name: "Akshay",
      text: "Welcome to Namaste React",
      replies: [],
    },
  ];

  // Reccursion Of CommentList
  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comments info={comment} />
        <div className="ml-5 border border-l-black pl-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
