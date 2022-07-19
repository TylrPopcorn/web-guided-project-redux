const initialState = {
    newMember: '',
    members: [],
}


const reducer = (state = initialState, action) => {
    let outComes = [
        ["ADD_MEMBER", function () {
            return {
                ...state,
                members: [...state.members, { name: action.payload, dragonStatus: true }]
            }
        }],

        //ADD MORE FUNCTIONS HERE
    ]

    for (let i = 0; i < outComes.length; i++) {
        //  console.log(outComes[i])
        if (outComes[i][0] == state) {
            outComes[i][1]();
        }
    }

    return state;
}

export default reducer;