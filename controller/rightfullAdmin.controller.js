import Form from "../models/rightfullAdmin.mode.js";

// Create a new form
const createForm = async (req, res) => {
  try {
    const { formName, fields,makingPeriod,category } = req.body;
    const form = new Form({ formName, fields,makingPeriod,category });
    await form.save();
    res.status(201).json({ success: true, form });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json({ success: true, forms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get form by ID
const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ success: false, message: "Form not found" });
    res.status(200).json({ success: true, form });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a form
const updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedForm) return res.status(404).json({ success: false, message: "Form not found" });
    res.status(200).json({ success: true, form: updatedForm });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a form
const deleteForm = async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(req.params.id);
    if (!deletedForm) return res.status(404).json({ success: false, message: "Form not found" });
    res.status(200).json({ success: true, message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  createForm,
  getForms,
  getFormById,
  updateForm,
  deleteForm
}
