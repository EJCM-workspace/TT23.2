const Auth = require('../config/Auth');
const User = require('../models/User');

const index = async(req, res) =>{
    try{
        const user = await User.findAll();
        return res.status(200).json({user});
    } catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
	try {

		//Hash and Salt
		const { password } = req.body;
		const hashAndSalt = Auth.generatePassword(password);
		const salt = hashAndSalt.salt;
		const hash = hashAndSalt.hash;

		const newUserData = {
			name: req.body.name,
            userName: req.body.userName,
            profilePic: req.body.profilePic,
			email: req.body.email,
			birthday: req.body.birthday,
			phone: req.body.phone,
            cpf: req.body.cpf,
			hash: hash,
			salt: salt
		}
		
		const user = await User.create(newUserData);
		return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user});
	} catch (e) {
		return res.status(500).json(e + '!');
	}
}

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};

module.exports = {
    update,
    destroy,
    create,
    index,
    show,
}