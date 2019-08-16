// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(InstProps) {
        super(InstProps)
        this.speciality = InstProps.speciality;
        this.favLanguage = InstProps.favLanguage;
        this.catchPhrase = InstProps.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(Student, subject) {
        console.log(`${Student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(stuProps) {
        super(stuProps)
        this.previousBackground = stuProps.previousBackground;
        this.className = stuProps.className;
        this.favSubjects = stuProps.favSubjects;
    }
    listsSubjects () {
        this.favSubjects.forEach((el) => {
            console.log(el);
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challange on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(PMprops) {
        super(PMprops) 
        this.gradClassName = PMprops.gradClassName;
        this.favInstructor = PMprops.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`)
    }
}

const Barry = new Instructor ({
    name: 'Barry',
    location: 'Bedrock',
    age: 54,
    speciality: 'redux',
    favLanguage: 'Python',
    catchPhrase: "Forged in Industry"
})

const fred = new Student ({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    previousBackground: 'Student',
    className: 'WEBPT9',
    favSubjects: ['JavaScript', 'CSS', 'Python']
})

const George = new ProjectManager ({
    name: 'Geogre',
    location: 'Bedrock',
    age: 67,
    speciality: 'react',
    favLanguage: 'HTML',
    catchPhrase: "Risk it to get the bisquit",
    gradClassName: 'WEB10',
    favInstructor: 'Pace'
})

George.standUp('class');
George.debugsCode(fred, 'JS');

fred.PRAssignment('java');
fred.listsSubjects();
fred.sprintChallenge('CSS');

Barry.grade(fred, 'JAva')
Barry.demo('CSS');