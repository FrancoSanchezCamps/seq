module.exports = (sequelize, dataTypes) => {
    
    let alias = "movies";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        lenght: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        }

    }

    let config = {
        tableName: "movies",
        timestamps: false,
    }
    
    const Movies = sequelize.define(alias,cols,config);
    return Movies

}