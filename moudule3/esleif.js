// 90 to 100 - A
// 70 to 89 - B
// 50 to 69 - C
//lower than 50 - f

var studentscore  = 35

if (studentscore > 90){
    console.log('studenthas scored A')
}

else if(studentscore >= 70 && studentscore <= 89){
    console.log('student has scored B')
}
else if(studentscore >=50 && studentscore <=69){
    console.log('student has scored C')
}
else {
    console.log('failure, student grade is F')
}