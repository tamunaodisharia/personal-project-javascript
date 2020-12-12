import {Subject} from "./subject.js";
import {LMS} from "./LMS.js";
import {Teachers} from "./teachers.js";
import {Pupils} from "./pupils.js";
import {Groups} from "./groups.js";
import {Gradebooks} from "./gradebooks.js";

/////////// create subjects
try{
  const history = new Subject({
    title: "History",
    lessons: 15
  });
  const math = new Subject({
      title: 'Math',
      lessons: 15
  });
  const lms = new LMS();
  lms.add(history);
  lms.add(math);
  lms.add(math);   //subject already exists
  
  console.log("Subjects:");
  console.log(lms.readALL());
  console.log(lms.verify(math));  //true
  
  lms.remove(math);
  lms.remove(math);   //couldn't be removed. subject doesn't exist in the database
  console.log(lms.verify(math));    //false
  console.log("Subjects:");
  console.log(lms.readALL());
  
  const teacher1 = {
    "name": {
      "first": "fgdfhg",
      "last": "dfghfggfgjgh"
    },
    "image": 'url1',
    "dateOfBirth": "01/01/2000", 
    "emails": [
      {
        "email": "someemail@gmail.com",
        "primary": true,
      }
    ],
    "phones": [
      {
        "phone": "123456789",
        "primary": true
      }
    ],
    "sex": "male", 
    "subjects": [
      {
        "subject": "hisTory",
      }
    ]
  }
  const teacher2 = {
    "name": {
      "first": "vigaca",
      "last": "ravicime"
    },
    "image": 'url2',
    "dateOfBirth": "02/02/2000", 
    "emails": [
      {
        "email": "someemail@gmail.com",
        "primary": true,
      }
    ],
    "phones": [
      {
        "phone": "123456789",
        "primary": true
      }
    ],
    "sex": "male",
    "subjects": [
      {
        "subject": "math",
      }
    ]
  }
  const updatedProfile = {
    "name": {
      "first": "new",
      "last": "teacher"
    },
    "image": 'u2r3',
    "dateOfBirth": "03/03/2000", 
    "emails": [
      {
        "email": "someemail@gmail.com",
        "primary": true,
      }
    ],
    "phones": [
      {
        "phone": "123456789",
        "primary": true
      }
    ],
    "sex": "male",
    "subjects": [
      {
        "subject": "history",
      }
    ]
  }
  const teachers = new Teachers();
  const teacherId1 = teachers.add(teacher1);
  const teacherId2 = teachers.add(teacher2);
  console.log(teachers);
  console.log(teachers.read(teacherId1));
  teachers.remove(teacherId2);
  console.log(teachers);
  teachers.update(teacherId1, updatedProfile);
  console.log(teachers.read(teacherId1));
  
  const data = {
    "name": {
      "first": "Tamuna",
      "last": "Odisharia"
    },
    "image": "ulr",
    "dateOfBirth": "11/12/2000", 
    "phones": [
      {
        "phone": "123456789",
        "primary": true
      }
    ],
    "sex": "female", 
  }
  
  
  const updatedData= {
        "name": {
          "first": "asdf",
          "last": "cudadjshd"
        },
        "image": "ulr",
        "dateOfBirth": "04/04/2000", 
        "phones": [
          {
            "phone": "123456789",
            "primary": true
          }
        ],
        "sex": "male", 
  }
    
  const pupils = new Pupils();
  const pupilId1 = pupils.add(data);
  const pupilId2 = pupils.add(updatedData);
  console.log(pupils.read(pupilId1));
  pupils.remove(pupilId2);
  pupils.update(pupilId1, updatedData);
  console.log(pupils.read(pupilId1));
  
  
  const room = 236;
  const groups = new Groups(pupils);
  
  // Create a new group
  const groupId = groups.add(room);
  groups.addPupil(groupId, pupilId1);
  groups.update(groupId, {
    room: 237
  });
  console.log(groups.read(groupId));
  console.log(groups.readAll());
  
  ///////// gradebooks
  
  const gradebooks = new Gradebooks(groups, teachers, lms);
  const level = 1;
  const gradebookId = gradebooks.add(level, groupId);
  
  const record = {
    pupilId: pupilId1,
    teacherId: teacherId1,
    subjectId: history.id,
    lesson: 1,
    mark: 9
  };
  
  gradebooks.addRecord(gradebookId, record);
  
  const oliver = gradebooks.read(gradebookId, pupilId1);
  console.log(oliver);
  
  // Read information about all students in this gradebook
  const students = gradebooks.readAll(gradebookId); // It will return the array of objects
  console.log(students);
}catch(e){
  console.log(e.message);
}



//////////// create subject database

