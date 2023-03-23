import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    teacherId:{type:String , required: true},
    password: {type:String , required: true},
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
  });

  const teacherModel = new mongoose.model('Teacher',teacherSchema);

  export default teacherModel;

