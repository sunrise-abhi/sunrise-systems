import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

async function unlockAccount() {
  const client = new MongoClient(process.env.DATABASE_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db();
    const users = db.collection('users');
    
    // Reset login attempts for all users
    const result = await users.updateMany(
      {},
      { 
        $set: { 
          loginAttempts: 0,
          lockUntil: null 
        } 
      }
    );
    
    console.log(`✅ Unlocked ${result.modifiedCount} user account(s)`);
    console.log('✅ You can now log in again!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.close();
  }
}

unlockAccount();
