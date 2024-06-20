import express from "express"
import mongoose from 'mongoose'
import cors from "cors"
import {v4} from 'uuid';
import { connectDb } from "./connect.js";
const app = express();
const port =process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const participantSchema = new mongoose.Schema({
  isTeamLeader: { type: String, required: true },
  codeTeam: { type: String, required: function() { return this.isTeamLeader=="No"; } },
  isAgreedMembersJoined: { type: String, required: function() { return this.isTeamLeader=="Yes"; } },
  teamName: { type: String, required: function() { return this.isTeamLeader=="Yes"; } },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  securityNumber: { type: String, required: true },
  discordTag: { type: String, required: true },
  isStudent: { type: String, required: true },
  universityName: { type: String, required: function() { return this.isStudent== "Yes"; } },
  studyField: { type: String, required: function() { return this.isStudent == "Yes"; } },
  level: { type: String, required: function() { return this.isStudent == "Yes"; } },
  aiLevel: { type: String, required: true },
  field: { type: String, required: true },
  githubLink: { type: String, required: true },
  kaggleLink: { type: String, required: true },
  cvLink: { type: String },
  linkedinLink: { type: String },
  participated: { type: String, required: true },
  experience: { type: String, required: function() { return this.participated == "Yes"; } },
  motivation: { type: String, required: true },
  shirtSize: { type: String, required: true }
});


const Participant = mongoose.model('Participant', participantSchema);

const generateUniqueCode = async () => {
  let code;
  let isUnique = false;
  
  while (!isUnique) {
    code =v4()
    const existing = await Participant.findOne({ codeTeam: code });
    if (!existing) {
      isUnique = true;
    }
  }
  
  return code.substring(0,3);
};

app.post('/submit-form', async (req, res) => {
  const formData = req.body;
  try {
    if (formData.isTeamLeader == "Yes") {
      formData.codeTeam = await generateUniqueCode();
    }else if(formData.isTeamLeader == "I don't have a team"){
      formData.codeTeam = "1"
    }
    const newParticipant = await Participant.create(formData);
    res.status(200).json({ message: 'Form submission saved', codeTeam: formData["isTeamLeader"]=="Yes" && newParticipant.codeTeam });
  } catch (err) {
    console.error('Error saving form submission:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/check-code', async (req, res) => {
  const {code}= req.body;
  try {
    const teamName = await Participant.find({
      codeTeam : code
    })
    console.log(teamName)
    if(teamName.length){
      res.status(200).json({team: teamName[0].teamName})
    }else{
      res.status(500).send(false)
    }
    
  } catch (err) {
    console.error('Error saving form submission:', err);
    res.status(500).send('Internal Server Error');
  }
});
connectDb()
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
