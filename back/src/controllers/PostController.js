const Post = require('../models/Post');
const User = require('../models/User');

const index = async(req, res) =>{
    try{
        const post = await Post.findAll();
        return res.status(200).json({post});
    } catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const post = await Post.findByPk(id);
        return res.status(200).json({post});
    }catch(err){
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
	try {		
		const post = await Post.create(req.body);
		return res.status(201).json({message: "Post criado com sucesso!", post: post});
	} catch (e) {
		return res.status(500).json(e +'!');
	}
}

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Post.update(req.body, {where: {id: id}});
        if(updated) {
            const post = await post.findByPk(id);
            return res.status(200).send(post);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Post não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Post.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Post deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Post não encontrado.");
    }
};

const addRelationshipUser = async(req,res) => {
    const {userId, postId} = req.params;
    try {
        const user = await User.findByPk(userId);
        const post = await Post.findByPk(postId);
        await post.setUser(user);        
        return res.status(200).json({message: 'Post associado à usuário com sucesso!'});
    }catch(err){
        return res.status(500).json("Post ou usuário não encontrado.");
    }
};

module.exports = {
    update,
    destroy,
    create,
    index,
    show,
    addRelationshipUser,
}