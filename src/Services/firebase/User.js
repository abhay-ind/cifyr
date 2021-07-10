import firebase from "firebase";

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
  var newPostKey = database.ref("Posts").push();
  await newPostKey.set(data);
  await database
    .ref("Beneficiary")
    .child(userId)
    .child("posts/" + newPostKey.key)
    .set({ postId: newPostKey.key });
}

export async function getPosts(userId) {
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
export async function addComment(userId, data) {
  var newCommKey = database.ref("Comments").child(userId).push();
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
  var newTranskey = database
    .ref("Transactions")
    .child(postId)
    .set({
      BeneficiaryId: Beneficiary,
      Investors: { investor: { AmountInvested: amount, s: 0 } },
    });
}
export async function updateTransactionAddInvest(postId, investor, amount) {
  database
    .ref("Transactions")
    .child(postId + "/Investors/" + investor)
    .update({ AmountInvested: amount });
}

export async function allTimeTopInvestors() {
  return database
    .ref("Investors")
    .orderByChild("TotalAmountInvested")
    .limitToFirst(100);
}
