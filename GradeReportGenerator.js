function getLetterGrade(score){
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'E';
}

function hasPassed(score){
    return score >= 60 ? true : false
}

function getFeedback(grade){
    if (grade === 'A') return 'Excellent work';
    if (grade === 'B') return 'Nice';
    if (grade === 'C' || grade === 'D') return 'You passed';
    if (grade === 'E') return 'Keep practicing';
    return 'Unknown grade';
}

function createGradeReport(name, score){


    return {
        name: name,
        score: score,
        grade: getLetterGrade(score),
        passed: hasPassed(score),
        feedback: getFeedback(getLetterGrade(score))
    }
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));