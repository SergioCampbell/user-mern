const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 10;

const signUpTemplate = new mongoose.Schema({
    
    fullName:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    confirmPassword:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        default:Date.now
    }
    },
        {
            collection: 'users'
        });

        
        //encrypting password
        signUpTemplate.pre('save', function(next){
            if(this.isNew || this.isModified('password')){
                const document = this;
                
                bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
                    if(err){
                        next(err)
                    }else{
                    document.password = hashedPassword;
                    next();
                }
            })
        }
    })
    
    signUpTemplate.methods.isCorrectPassword = function(password, callBack){
        bcrypt.compare(password, this.password, function(err, same){
            if(err){
                callBack(err);
            }else{
                callBack(err, same);
            }
        })
    }

    //encrypting confirmation password
    signUpTemplate.pre('save', function(next){
        if(this.isNew || this.isModified('password')){
            const document = this;
            
            bcrypt.hash(document.confirmPassword, saltRounds, (err, hashedConfirmPassword) => {
                if(err){
                    next(err)
                }else{
                document.confirmPassword = hashedConfirmPassword;
                next();
            }
        })
    }
})

signUpTemplate.methods.isCorrectPassword = function(confirmPassword, callBack){
    bcrypt.compare(confirmPassword, this.confirmPassword, function(err, same){
        if(err){
            callBack(err);
        }else{
            callBack(err, same);
        }
    })
}

    const Log = mongoose.model('users', signUpTemplate)
    module.exports = Log;