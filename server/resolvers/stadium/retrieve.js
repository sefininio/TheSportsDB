const transform = (data) => {
    return {
        name: data.strStadium,
        thumb: data.strStadiumThumb,
        description: data.strStadiumDescription,
        location: data.strStadiumLocation,
        capacity: data.intStadiumCapacity,
    };
}

const stadiumResolver = (parent, args, ctx) => {
    return transform(parent);
};

export default stadiumResolver;