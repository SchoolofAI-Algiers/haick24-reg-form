export const cards = [
    
    {
        
        title : "Are you the team Leader ?",
        label : "the team leader get to create their team then share the registration code with team members",
        type:"card_select",
        options :[
            "Yes",
            "No",
            "I don't have a team"
        ],
        field: "isTeamLeader"
    },{
        
        title : "please enter your team code ? *",
        label : "the code is provided by your team leader",
        type:"",
        field: "codeTeam",
        required:true
    },{
        title :'Do you agree to let members with no team to join yours ? *',
        lable : 'team can have up to 5 members, if you agree we possibly add members to your team',
        type:"card_select",
        options:[
            "Yes",
            "No"
        ],
        field:"isAgreedMembersJoined",
        required : true
    },{
        title : "Your Team Name *",
        label : "is required to add a name your team",
        field : "teamName",
        type : "text",
        showForTeamLeader:true,
        required :true
    },
    {
        title: "Your Full Name *",
        label:"",
        field : "fullName",
        type : "text",
        required : true
    },{
        title:"Your E-mail *",
        lable : "",
        field : "email",
        type :"email",
        required : true
    },
    {
        title:"Your Phone Number *",
        label: "",
        field:"phoneNumber",
        type:"text",
        required :true
    },
    {
        title: "Your social security number *",
        label: "if you don't have one enter 111",
        field :"securityNumber",
        type:"text",
        required : true
    },
    {
        title :"Discord Tag *",
        label:"",
        field:"discordTag",
        type: "text",
        required :true
    },
    {
        title :"Are you a student ?",
        label:"",
        field:"isStudent",
        options : [
            "Yes",
            "No"
        ],
        type:"card_select",
        required :true
    },
    {
        title :"Where Do You Study",
        label:"Tell us the name of your university",
        field:"universityName",
        type: "text",
        required : true
    },
    {
        title :"What Do You Study ?",
        label:"Tell us your field of study",
        field:"studyField",
        type: "text",
        required : true 
    },
    {
        title:"In which Year ?",
        label:"",
        type:"card_select",
        options:[
            "1CP/L1",
            "2CP/L2",
            "1CS/L3",
            "2CS/M1",
            "3CS/M2"
        ],
        field: "level",
        required : true
    },
    {
        title :"What is your level in AI",
        type:"range",
        values : ["Beginner","Intermediate","Professional"],
        label :"",
        field :"aiLevel",
        required:true
    },
    {
        title :"What fields of Ai do you study",
        label :"",
        type:"checkbox_group",
        options : [
            "Machine Learning",
            "Deep Learning",
            "Data Analysis",
            "Computer vision",
            "NLP",
            "Reinforcement Learning"
        ],
        required:true,
        field : "field"
    },
    {
        title :"Your Github *",
        label : "Enter your github profile link",
        type:"text",
        field: 'githubLink',
        placeholder:"https://github.com/user",
        required:true
    },
    {
        title :"Your Kaggle *",
        lable:"Enter your kaggle profile link",
        type:"text",
        placeholder:"https://kaggle.com/user",
        field:"kaggleLink",
        required:true
    },
    {
        title :"Your Cv (optional)",
        required:false,
        label:"Enter your cv link",
        type:"text",
        field :"cvLink"
    }
    ,
    {
        title :"Your Linkedin",
        required:false,
        label:"Enter your Linkedin profile Link",
        placeholder:"https://linkedin.com/user-in",
        type:"text",
        field :"linkedinLink"
    },
    {
        title :"Have you ever participated in Datathon before ? *",
        label :"",
        type:"card_select",
        options : [
            "Yes",
            "No"
        ],
        field:"participated",
        required :true
    },
    {
        title :"Brief Description of Your Experience *",
        required:true,
        label:"share with us your previous decription in datathons",
        type:"text",
        field :"experience",
        placeholder:"talk about your experience"
    },
    {
        title :"Why Do You Want to be part of Haick *",
        required:true,
        label:"show us your motivation",
        type:"text",
        field :"motivation",
        placeholder:"talk about your motivation .."
    },
    {
        title :"Your Shirt Size ? *",
        label :"",
        type:"card_select",
        options : [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        field:"shirtSize",
        required :true
    },
]