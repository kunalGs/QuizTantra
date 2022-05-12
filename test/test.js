// firebase.initializeTestApp({
//     projectId: "quiztantra",
//     auth: { uid: "qicBSAKDHpPdg6B5PZZ31VRjOyE3", email: "kunalgsinha@gmail.com" }
//   });

const assert = require('assert');
const firebase = require('@firebase/testing');

const MY_PROJECT_ID = "quiztantra";

describe("Quiz_Tantra app",() => {
    it("understands basic addition", () => {
        assert.equal(2+2, 4);
        });

   it("can read items in the read-only collection", async() => {
       const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID}).firestore();
       const testDoc = db.collection("readonly").doc("testDoc");
       await firebase.assertSucceeds(testDoc.get());


   });
   
   it("can't write items in the read-only collection", async() => {
    const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID}).firestore();
    const testDoc = db.collection("readonly").doc("testDoc2");
    await firebase.assertFails(testDoc.set({foo: "bar"}));
 
   });

   it("can write to an user document with the same ID as our user", async() => {
    const myAuth = {uid: "qicBSAKDHpPdg6B5PZZ31VRjOyE3", email: "kunalgsinha@gmail.com"}; 
    const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID}).firestore();
    const testDoc = db.collection("users").doc("qicBSAKDHpPdg6B5PZZ31VRjOyE3");
    await firebase.assertFails(testDoc.set({foo: "bar"}));
});
})