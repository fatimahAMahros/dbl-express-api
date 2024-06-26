module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: String,
            nickname: String,
            company: String,
            job_title: String,
            phone: String,
            email: String,
        }, {
            timestamps: true
        }
    );

        schema.method("toJSON", function(){
            const {__v, _id, ...object} = this.toObject();
            object.id = _id;

            return object;
        });

    return mongoose.model("contacts", schema);
}