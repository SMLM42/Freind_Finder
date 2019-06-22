var friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    })

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body
        // console.log(newFriend)
        var diffTotals = [];
        for (var i = 0; i < friendData.length; i++) {
            var friend = friendData[i]
            console.log(friendData.length)
            var diff = 0
            for (var ii = 0; ii < friend.scores.length; ii++) {
                var a = Math.abs(parseInt(newFriend.scores[ii]) - parseInt(friend.scores[ii]))
                diff += a
            }
            diffTotals.push(diff)
        }
        // console.log(friendData[1])
        console.log(diffTotals + "a")
        var faviFriendTotal = parseInt(diffTotals[0])
        var faviFriend = 10
        for (var i = 0; i <= diffTotals.length; i++) {
            if (parseInt(diffTotals[i]) < parseInt(faviFriendTotal)) {
                faviFriendTotal = diffTotals[i]
                faviFriend = i
            }
        }
        faviFriend = friendData[faviFriend]
        friendData.push(req.body)
        res.json(faviFriend)
        // console.log(faviFriend)
        // So we need to take in the new friend, take all its question values and compare i them to each of the current members of friends.db

    })

}