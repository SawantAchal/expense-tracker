// file to connect database
import mongoose from 'mongoose'
export const connectDB = async () => {
  const mongoURL = process.env.MONGODB_URL;
  if (!mongoURL) {
    console.error('MongoDB URL not found in environment variables');
    return;
  }

  try {
    await mongoose.connect(mongoURL);
    console.log('DB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
