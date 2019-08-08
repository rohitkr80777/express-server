import IUserModel from './IUserModel';
import UserSchema from './UserSchema';
import * as mongoose from 'mongoose';
const toConvert = {
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
    },
    virtuals: true,
};
export const userSchema = new UserSchema({
    collection: 'User',
    toJSON: toConvert,
    toObject: toConvert,
});
export const UserModel: mongoose.Model< IUserModel > = mongoose.model< IUserModel >
(
    'User',
    userSchema,
    'Users',
    true,
);
