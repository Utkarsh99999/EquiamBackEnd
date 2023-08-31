import User from '../models/userModal.js';
export const getUserData = async (req,res)=>{
    try {
        const users = await User.find();
        console.log(users);
        res.status(200).send(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred' });
      }
}