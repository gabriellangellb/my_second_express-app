const myDb = require("../model/my_db");
const getfriends1 = ()=>{
    return myDb.friends1;
}

const getfriends1ByID =(request) =>{
    for(i=1; i<5; i++){
        if(request.params.friends1Id == friends1[i].id){
            return friends1[i];
        }
        console.log(friends1[i]);
    }
    return null;
};
module.exports = {getfriends1,getfriends1ByID}