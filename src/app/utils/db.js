import mongoose from 'mongoose'

const connect = async () => {
  if (mongoose.connections[0].readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('MongoDB connected successfully')
  } catch (error) {
    throw new Error('Error connecting to MongoDB')
  }
}

export default connect
