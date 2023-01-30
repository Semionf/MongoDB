import { Course } from "../models/course/course.model";
import { ICourse } from "../models/course/course.model";

export const addStudentAsync = async (course: ICourse) => {
  let courseModel = new Course(course);
  await courseModel.save();
};

export const getCoursesAsync = async (): Promise<ICourse[]> => {
  return await Course.find(); //option .lean()
};
