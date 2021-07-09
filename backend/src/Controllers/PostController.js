const Post = require('../Models/Post'); 

module.exports= {
    async index (req, res) {

        const _findname = "Everton";

        const post = await Post.find(_findname);

        return res.json(post);
    },

    async store (req, res){
        console.log(req.body);
        const  { author, place, description, hashtags} = req.body;
        const { filename : image} = req.file;
        
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        })
        
        return res.json(post);
    },
}