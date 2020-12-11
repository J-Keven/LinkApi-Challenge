import mongoose from 'mongoose';

export default (): void => {
  const mongoUri = process.env.MONGO_URL_CONNECTION;
  if (!mongoUri) {
    console.log(mongoUri);
    throw new Error('database connection failure');
  }
  mongoose
    .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
      console.log('database connected');
    });
};
