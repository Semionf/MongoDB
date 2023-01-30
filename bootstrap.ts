import mongoose from "mongoose";

export const bootstrap = async (cb: any) => {
  let dbName = "tsionet2012";
  let connectionString = `mongodb://127.0.0.1:27017/${dbName}`;
  await mongoose.connect(connectionString);
  cb();
};
