module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          name: String,
          email: String,
          phoneno: String,
          city:String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };