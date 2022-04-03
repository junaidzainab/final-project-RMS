import { Indexable } from "./students"

export const getStudentInfo = (nameToFind: any)=> {
    let students: any
    students = JSON.parse(sessionStorage.getItem('students')!)
    let studentFound
    for (let klass in students) {
        (students as Indexable)[klass].forEach((student: any) => {
          if(student.username.toLowerCase() === nameToFind.toLowerCase()){
            const {username, name, age, bio, subjectsOfferred} = student
            studentFound = {username, age, bio, name, subjectsOfferred, class: klass}
          }
        })
      }
    return studentFound ? studentFound : 0
}