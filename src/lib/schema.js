import * as z from 'zod';

export const formSchema = z.object({
  isTeamLeader: z
    .enum(['Yes', 'No', "I don't have a team"])
    .refine((value) => value != null, {
      message: 'You must select an option !',
    }),
  isAgreedMembersJoined: z.string().nonempty({
    message: 'is required, please answer',
  }),
  teamName: z.string().nonempty({
    message: 'this field is required',
  }),
  fullName: z.string().describe('fullName').nonempty({
    message: 'this field is required',
  }),
  email: z.string().min(1, 'this field is required').email('invalid email address'),
  phoneNumber: z.string().min(10, 'this field is required'),
  securityNumber: z.string().min(1, 'this field is required'),
  discordTag: z.string().min(2, 'this field is required required'),
  isStudent: z
    .enum(['Yes', 'No'])
    .nullable()
    .refine((value) => value != null, {
      message: 'You must select an option',
    }),
  universityName: z.string().describe("universtityName").nonempty({message:"university name is required"}) 
  ,
  studyField: z.string().describe("studyField").nonempty({message : "this field is required"}),
  level: z
    .enum(['1CP/L1', '2CP/L2', '1CS/L3', '2CS/M1', '3CS/M2'])
    .nullable()
    .refine((value) => value != null, {
      message: 'You must select a level',
    }),
  aiLevel: z.string().nonempty({
    message: 'this field required',
  }),
  field: z
    .enum([
      'Machine Learning',
      'Deep Learning',
      'Data Analysis',
      'Computer vision',
      'NLP',
      'Reinforcement Learning',
    ])
    .nullable()
    .refine((value) => value != null, {
      message: 'You must select an option',
    }),
  githubLink: z.string().min(20, 'github profile is required'),
  kaggleLink: z.string().min(20, 'kagggle profile is required'),
  cvLink: z.string(),
  linkedinLink: z.string(),
  participated: z
    .enum(['Yes', 'No'])
    .nullable()
    .refine((value) => value != null, {
      message: 'You must select an option',
    }),
  experience: z.string().min(10, 'tell us your experience !'),
  motivation: z.string().min(10, 'show us your motivation !'),
  shirtSize: z
    .enum(['S', 'M', 'L', 'XL', 'XXL'])
    .nullable()
    .refine((value) => value != null, {
      message: 'You must select an option',
    }),
});
