const User = require('../models/user')

exports.addFriend = async(req,res) =>{
    try{
        const {userId,friendId} = req.body

        if(!userId){
            console.log('No user ID provided')
            return res.status(401).send('No user ID provided')
        }
        if(!friendId){
            console.log('No user ID provided')
            return res.status(401).send('No user ID provided')
        }

        const user = await User.findById(userId)

        if(!user){
            console.log('Invalid user id')
            return res.status(402).send('Invalid user id')
        }
        const friend = await User.findById(friendId)
        if(!friend){
            console.log('Invalid user id')
            return res.status(402).send('Invalid user id')
        }

        user.friend.push(friend._id)
        await user.save()
        friend.friend.push(user._id)
        await friend.save()

        return res.status(200).send('Friend added')


    }catch(error){
        console.log(error.message)
        return res.status(500).send('Internal Server Error')
    }
}