import { model, Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: [4, "Title should be at least 4 characters"],
      maxLength: [32, "Title should not be more than 32 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [8, "Description should be at least 8 characters"],
      maxLength: [200, "Description should not be more than 200 characters"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    lectures: [
      {
        title: String,
        description: String,
        lecture: {
          public_id: {
            type: String,
            required: true,
          },
          secure_url: {
            type: String,
            required: true,
          },
        },
      },
    ],
    thumbnail: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    numberOfLectures: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: String,
      required: [true, "Course instructor name is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", courseSchema);
export default Course;
