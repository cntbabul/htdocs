const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        require:[true, "inventory type required"],
        enum:['in', 'out']
    },
    bloodGroup:{
        type: 'String',
        require:[true, 'Blood Group Required'],
        enum:['o+', 'o-', 'a+', 'a-', 'b+', 'b-', 'ab+', 'ab-']
     },
     quantity:{
        type:Number,
        require:[true, 'Blood quantity Required']
    },
    organization:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        require:['true , organization is required']
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        require:function () {
            return this.inventoryType === "out"           
        }
    },
    donar:{
        type:mongoose.Schema.ObjectId,
        ref: 'users',
        require: function () {
            return this.inventoryType === "in"
        }
    }

}, {timestamps:true});

module.exports = mongoose.model('inventory', inventorySchema);
