// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน 
// เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

// TEAM : ท่าเรือใบสีฟ้า (Man City)
// TOTAL MATCH : 38 [ignore]
// WIN : 28 => 28 * 3 = 84 [singificant]
// DRAW : 5 => 5 * 1 = 5 [singificant]
// LOSE : 5 => 5 * 0 - 0 [ignore]

// TOTAL : 89


// ABSTRACYION
// HIDING COMPLEXITY
// EASY INTERACT

// (WIN,DRAW) => TOTAL

const calMatchPoint = (win, draw) => win * 3 + draw;