import firebase from "firebase";
import firebaseConfig from "./fbConfig";

try {
  firebase.initializeApp(firebaseConfig);
} catch {}
var database = firebase.database();
export async function createUser(userid, data) {
  let status = 0;
  await database
    .ref("Users")
    .child("userid")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        status = 1;
        return "Already User created";
      }
    })
    .catch((e) => {
      status = 2;
    });
  if (status === 1) return status;
  await database
    .ref("Users")
    .child(userid)
    .set(data)
    .then(() => (status = 1))
    .catch((e) => (status = 2));
  return status;
}

export async function getUserProfile(userid) {
  var value = {};
  await database
    .ref("Users")
    .child(userid)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        value = snapshot.val();
      } else {
        console.log("None");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return value;
}

export async function createPost(userId, data) {
  // console.log('uid: '+userId,data)
  var newPostKey = database.ref("Posts").push();
  await newPostKey.set(data);
  await database
    .ref("Beneficiary")
    .child(userId)
    .child("posts/" + newPostKey.key)
    .set({ postId: newPostKey.key });
}

export async function getPostsByUid(userId) {
  let res = [];
  await database
    .ref("Posts")
    .equalTo(userId)
    .then((snapshot) => {
      if (snapshot.exists()) {
        res = snapshot.val();
      } else {
        res = null;
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return res;
}

export async function getPosts(limit = 0) {
  let res = [];
  await database
    .ref("Posts")
    .limitToLast(limit)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        res = snapshot.val();
      } else {
        res = null;
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return res;
}

export async function getPostById(uid) {
  let res={};

  await database
    .ref("Posts")
    .child(uid)
    .get()
    .then((snapshot) => (res["post"] = snapshot.val()))
    .catch((e) => console.log(e));
  await database
    .ref("Comments")
    .child(uid)
    .get()
    .then((snapshot) => (res["comment"] = snapshot.val()))
    .catch((e) => console.log(e));
  return res;
}
export async function getAllPosts() {
  let res = [];
  await database
    .ref("Posts")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        res = snapshot.val();
      } else {
        res = null;
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return res;
}

export async function deletePost(userId, postId) {
  let status = 0;
  await database
    .ref("Posts")
    .child(postId)
    .remove()
    .then(() => (status = 1))
    .catch((e) => (status = 2));
  return status;
}
export async function addComment(postId, data) {
  var newCommKey = database.ref("Comments").child(postId).push();
  newCommKey.set(data);
}

export async function getComments(postId) {
  var comments = [];
  await database
    .ref("Comments")
    .child(postId)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        comments = snapshot.val();
      } else {
        comments = null;
      }
    })
    .catch((error) => {
      console.log("error fetching comments");
    });
  return comments;
}

export async function createTransaction(postId, Beneficiary, investor, amount) {
  let d = new Date(Date.now());
  var bigendian = d.toISOString().substring(0, 10);
  var newTranskey = database
    .ref("Transactions")
    .child(postId)
    .set({
      BeneficiaryId: Beneficiary,
      Investors: {
        investor: { AmountInvested: amount, s: 0, date: bigendian },
      },
    });
  database
    .ref("Total")
    .child("Investment")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        let cur = snapshot.val();
        cur += amount;
        database
          .ref("Total")
          .child("Investment")
          .update({ totalValue: cur })
          .catch((e) => {});
      } else {
        console.log("Should Not reach here");
      }
    })
    .catch((e) => {});
  database
    .ref("Total")
    .child("AdsHelped")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        database
          .ref("Total")
          .child("AdsHelped")
          .update({ totalValue: snapshot.val() + 1 });
      }
    });
}
export async function getTopDetails() {
  let res = null;
  await database
    .ref("Total")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        res = snapshot.val();
      }
    });
  return res;
}
export async function updateTransactionAddInvest(postId, investor, amount) {
  let d = new Date(Date.now());
  var bigendian = d.toISOString().substring(0, 10);

  await database
    .ref("Transactions")
    .child(postId + "/Investors/" + investor)
    .update({ AmountInvested: amount, date: bigendian })
    .then(() => console.log("Worked"))
    .catch((e) => console.log(e));
}

export async function allTimeTopInvestors() {
  return await database
    .ref("Investors")
    .orderByChild("TotalAmountInvested")
    .limitToFirst(100)
    .get()
    .then((snapshot) => console.log(snapshot.val()));
}
export async function lastWeekTopInvestors() {
  let week = new Date(Date.now() - 1000 * 60 * 60 * 24 * 6);
  let today = new Date(Date.now());
  var weekBE = week.toISOString().substring(0, 10);
  var todayBE = today.toISOString().substring(0, 10);
  console.log(weekBE);
  console.log(todayBE);
  return await database
    .ref("Transactions")
    .orderByChild("date")
    .get()
    .then((snapshot) => console.log(snapshot.val()));
}
