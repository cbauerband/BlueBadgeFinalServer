var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Character = sequelize.import('../models/character');
let validateSession = require('../middleware/validate-session');

//POST CHARACTER

router.post('/create', validateSession, (req, res) => {
    const character = {
    owner: req.user.id,
    name: req.body.character.name,
    campaign: req.body.character.campaign,
    race: req.body.character.race,
    class: req.body.character.class,
    alignment: req.body.character.alignment,
    strength: req.body.character.strength,
    dexterity: req.body.character.dexterity,
    constitution: req.body.character.constitution,
    intelligence: req.body.character.intelligence,
    wisdom: req.body.character.wisdom,
    charisma: req.body.character.charisma,
    armorClass: req.body.character.armorClass,
    hitPoints: req.body.character.hitPoints,
    equipment: req.body.character.equipment,
    weapons: req.body.character.weapons,
    spells: req.body.character.spells
}
    Character.create(character)
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json({error: err.message}))
})

//GET ALL CHARACTERS OF A USER

router.get('/usercharacters', validateSession, (req, res) => {
    let userid = req.user.id;
    Character.findAll({
        where: {owner: userid}
    })
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json({error: err}))
})

//GET INDIVIDUAL CHARACTERS
router.get('/user/:id', validateSession, (req, res) => {
    let id = req.params.id;
    Character.findAll({
        where: {id: id}
    })
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json({error: err}))
})

//UPDATE LOGS
router.put('/user/:id', validateSession, function (req, res) {
    const updateCharacter = {
        name: req.body.character.name,
        campaign: req.body.character.campaign,
        race: req.body.character.race,
        class: req.body.character.class,
        alignment: req.body.character.alignment,
        strength: req.body.character.strength,
        dexterity: req.body.character.dexterity,
        constitution: req.body.character.constitution,
        intelligence: req.body.character.intelligence,
        wisdom: req.body.character.wisdom,
        charisma: req.body.character.charisma,
        armorClass: req.body.character.armorClass,
        hitPoints: req.body.character.hitPoints,
        equipment: req.body.character.equipment,
        weapons: req.body.character.weapons,
        spells: req.body.character.spells
    }
    const query = { where: { id: req.params.id, owner: req.user.id } };

    Character.update(updateCharacter, query)
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json({error: err}))
})

//DELETE LOGS
router.delete('/delete/:id', validateSession, function(req, res) {
    const query = {where: {id: req.params.id, owner: req.user.id}}

    Character.destroy(query) 
    .then(() => res.status(200).json({message: "Character Entry Removed"}))
    .catch((err) => res.status(500).json({error: err}));
})

module.exports = router;