import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  formName: { type: String, required: true },
  makingPeriod:{type:String,required:true},
  category: { type: String, required: true },
  fields: [
    {
      label: { type: String, required: true },
      type: { type: String, required: true }, // text, number, email, etc.
      required: { type: Boolean, default: false },
      options: { type: [String] }, // For select, radio, etc.
    },
  ],
});

const Form = mongoose.model("Form", formSchema);

export default Form
