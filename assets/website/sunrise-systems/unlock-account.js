const { MongoClient } = require('mongodb');
require('dotenv').config();

async function unlockAccount() {
  const client = new MongoClient(process.env.DATABASE_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
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
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

unlockAccount();
