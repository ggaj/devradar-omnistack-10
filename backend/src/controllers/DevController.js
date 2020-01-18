const axios = require('axios')
const Dev = require('../models/Dev')
const parseStrnigAsArray = require('../utils/parseStringAsArray')
const { findConnections, sendMessage } = require('../websocket')

module.exports = {
  async index(req, res,){
    const devs = await Dev.find();

    return res.json(devs)
  },

  async store (req, res) {
    const { github_username, techs, latitude, longitude } = req.body
    
    let dev = await Dev.findOne({github_username})

    if(!dev){

      const respone = await axios.get(`https://api.github.com/users/${github_username}`)
    
      const {name = login, avatar_url, bio} = respone.data
    
      const techsArray = parseStrnigAsArray(techs)
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })

      const sendMessageConnectionTo = findConnections(
        {latitude, longitude},
        techsArray
      )
      
      sendMessage(sendMessageConnectionTo, 'new-dev', dev)
      
    }

    return res.json(dev)
  }
}