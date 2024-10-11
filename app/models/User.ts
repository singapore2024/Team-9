import mongoose, {Schema} from 'mongoose';

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error('MONGODB_URI is not defined');
}
mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Date,
    default: null,
  },
  role: {
    type: String,
    default: 'user', // Default role
  },
  providers: [String],
  
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;