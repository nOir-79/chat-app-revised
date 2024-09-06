const Group = require('../models/group')
const User = require('../models/user')

exports.createGroup = async(req,res)=>{
    try{
        const {groupname,userList} = req.body
        if(!groupname){
            console.log('No group name provided')
            return res.status(400).send('No group name provided')
        }
        if(userList.length == 0){
            console.log('You need atleast one user')
            return res.status(400).send('You need atleast one user')
        }

        userList.map(async(user)=>{
            const userExist = await User.findById(user)
            if(!userExist){
                console.log('User does not exist')
                return res.status(400).send('User does not exist')
            }
            userList.map((otherUser)=>{
                if(otherUser != user){
                    const otherUserisFriend = userExist.friend.includes(otherUser)
                    if(otherUserisFriend == false){
                        console.log('All users should be friends')
                        return res.status(400).send('All users should be friends')
                    }
                }
            })
        })

        const newGroup = new Group({
            groupname:groupname,
            member:userList
        })

        const createdGroup = await newGroup.save()

        if(!createdGroup){
            console.log('Failed to save the group to database')
            return res.status(401).send('Failed to save the group to database')
        }

        return res.status(200).send('Group Created')

    }catch(error){
        console.log(error.message)
        return res.status(500).send('Internal Server Error')
    }
}