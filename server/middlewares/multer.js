import multer from 'multer'
import {v4 as uuid} from 'uuid'

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null, "uploads");
    },

    //uuid is used - random and unique ids to store files - since we dont want two files with same name
    filename(req,file,cb){
        const id =uuid();

        //extension name
        const extName = file.originalname.split(".").pop();

        const fileName =`${id}.${extName}`;
        cb(null, fileName);
    },
});

export const uploadFiles =multer({storage}).single("file");