const request = require('supertest');
const server = require('./src/server');
module.exports = server







// describe('POST/register', function () {
//     it('testing for join quiz', function (done) {
//         let data = {
//             uid : "qicBSAKDHpPdg6B5PZZ31VRjOyE3",
//             quizId: "6276b23502ec30fa2cf7c58f"
            
//         }
//         request(server)
//             .post('/API/quizzes/join')
//             .send(data)
//             .expect(400,done)
//     });
// });

// describe('GET /login', function () {
//     it('checking the user info', function (done) {
//         let data = {
//             uid1 : "qicBSAKDHpPdg6B5PZZ31VRjOyE3",
             
//         }
//         request(server)
//             .get(`API/users/${uid1}`)
//             .send(data)
//             .expect(200, done)
//     })
// })


// const fetchQuiz = async () => {
//     const res = await fetch(`${API}/quizzes/join`, {
//         method: 'POST',
//         body: JSON.stringify({ quizId: "6276b23502ec30fa2cf7c58f" , uid: "qicBSAKDHpPdg6B5PZZ31VRjOyE3" }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     const quizData = await res.json()
//     setLoading(false)
//     if (quizData.error) setQuizTitle(quizData.error)
//     else {
//         setQuizTitle(quizData.title)
//         setQuestions(quizData.questions)
//     }