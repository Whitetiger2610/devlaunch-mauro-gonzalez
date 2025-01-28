const prompt = require('prompt-sync')()

const REJECT_ASSISTANT_GRADE = 'C'
const AMOUNT_OF_GRADES = 4
const MIN_GRADE = 8
const MIN_AVERAGE_GRADE = 8.5
const FAST_FORWARD_GRADE = 9


  function validateScholarship(grade1,grade2,grade3,grade4,assistantGrade){
    if(assistantGrade === REJECT_ASSISTANT_GRADE) return false

    if (grade1 < MIN_GRADE || grade2 < MIN_GRADE || grade3 < MIN_GRADE || grade4 < MIN_GRADE){
      return false
    }

    const average = (grade1 + grade2 + grade3 + grade4) / AMOUNT_OF_GRADES

    if (average < MIN_AVERAGE_GRADE){
      return false
    } else {
      if (average < FAST_FORWARD_GRADE && !(assistantGrade === 'A' || assistantGrade === 'B')){
        return false
      }
    }

    return true
  }
function main(){
  
  const grade1 = parseFloat(prompt("Ingrese la nota de la materia1: "))
  const grade2 = parseFloat(prompt("Ingrese la nota de la materia2: "))
  const grade3 = parseFloat(prompt("Ingrese la nota de la materia3: "))
  const grade4 = parseFloat(prompt("Ingrese la nota de la materia4: "))
  const assistantGrade = prompt("Ingrese la calificació de asistente de laboratorio (A,B,C): ")

  const isEligible = validateScholarship(grade1, grade2, grade3, grade4, assistantGrade)
     
  if (isEligible){

    console.log('Felicitaciones! Eres elegible para beca')

  } else {
    console.log('Lo siento, no accedes a la beca')
  }


      
      // const optionEligible1 = averageGrade >= 9 && grade1 >= 8 && grade2 >= 8 && grade3 >= 8 && grade4 >= 8
      // const optionEligible2 = averageGrade >= 8.5 && (gradeLaboratory === "A" || gradeLaboratory === "B")
    
      //   if (optionEligible1 || optionEligible2){
      //     isEligible = true
      //   } else {
      //     isEligible = false
      //   }
      // }
    // } else{
    //   console.error('No se ingresaron todos los datos')
    // }
  

  
  // console.log(`el estudiante ${nameStudent} califica para la beca? : ${isScholarshipEligible(nameStudent,grade1,grade2,grade3,grade4,gradeLaboratory)}`)

}

main()