class Contestant{
    constructor(){
        this.index = null;
        this.name = null;
    }

    getCount(){
        var contestantCountRef = database.ref("contestantCount");
        contestantCountRef.on("value", function(data){
            contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            contestantCount: count
        })
    }

    update(){
        var contestantIndex  = "contestants/contestant" + this.index; //string concatenation, "player"+1 = player1 
        database.ref(contestantIndex).set({
            name: this.name, 
        })
    }

 //static functions are those common functions which are called by the class themselves rather than by objects of the class. 
    static getContestantInfo(){
        var contestantInfoRef = database.ref("contestants");
        contestantInfoRef.on("value", function(data){ //function(data){} can also be written as (data)=>{}
            allContestants = data.val();
        })
    }
}