export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing
    token: "BQCOeKbeQ2S8DP9lgB6N3_ySHGeFI8m08WtMrBHtEEAoKoHKRWImRXCvd2pF20LsLP3JEUOeJ-7l4KlyDdpdePJQ4CT2oB5i52u5p2mBIR2lT6BA4LGmij6iK9xlg4e4ji_UkQ9ZW832wvFM_kKjO0BEn-YbwD6_G7QVXy4T2tR_3vv2yWjUGfUVNq_uc3SSqJ7HFX97f4HuOqch4cJ1yQ"
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        default:
            return state;
    }
}

export default reducer;

