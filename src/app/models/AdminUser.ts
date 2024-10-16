import mongoose, { Schema, Document, mongo } from "mongoose";

interface AdminDocument extends Document {
  username: string;
  password: string;
}

const adminSchema: Schema<AdminDocument> = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel =
  mongoose.models.Admin || mongoose.model<AdminDocument>("Admin", adminSchema);

export default AdminModel;
