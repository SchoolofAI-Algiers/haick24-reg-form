import mongoose from "mongoose";
const participantSchema = new mongoose.Schema({
  isTeamLeader: { type: Boolean, required: true },
  codeTeam: { type: String, required: function() { return !this.isTeamLeader; } },
  isAgreedMembersJoined: { type: Boolean, required: function() { return this.isTeamLeader; } },
  teamName: { type: String, required: function() { return this.isTeamLeader; } },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  securityNumber: { type: String, required: true },
  discordId: { type: String, required: true },
  isStudent: { type: Boolean, required: true },
  universityName: { type: String, required: function() { return this.isStudent; } },
  studyField: { type: String, required: function() { return this.isStudent; } },
  level: { type: String, required: function() { return this.isStudent; } },
  aiLevel: { type: String, required: true },
  field: { type: [String], required: true },
  githubLink: { type: String, required: true },
  kaggleLink: { type: String, required: true },
  cvLink: { type: String },
  linkedinLink: { type: String },
  participated: { type: Boolean, required: true },
  experience: { type: String, required: function() { return this.participated; } },
  motivation: { type: String, required: true },
  shirtSize: { type: String, required: true }
});

export const Participant = mongoose.model('Participant', participantSchema);