import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE, MESSAGES} from './Types'

let initialState = []

export default function (state = initialState, action) {

    switch (action.type) {

        case MESSAGES:

            return[...state, action.payload]
            default:
                return state

        // case LOGIN:
        //     return;


        // case REGISTER:
        //     break;

        // case NEW_POST:
        //     break;

        // case LIKE:
        //     break;

        // case DELETE_MESSAGE:
        //     break;


    }
}