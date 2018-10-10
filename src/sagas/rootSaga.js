import { all } from 'redux-saga/effects'

//Watchers
//Login
import watchIsLogged from './Login/is_logged_saga'
import watchLogin from './Login/login_saga'
import watchLoginFail from './Login/error_logging_saga'
import watchLogout from './Login/logout_saga'

//Posts
import watchPostsGetAll from './Posts/get_all_data_saga'
import watchVoteChange from './Posts/change_vote_score_saga'
import watchPostDelete from './Posts/delete_post_saga'

//Modal(Create Post)
import { watchOpenModalCreatePost, watchCloseModalCreatePost } from './Posts/handle_modal_create_post_sagas'

//Filters
import watchFiltersChange from './Filter/change_filters_saga'
import watchFiltersGet from './Filter/get_filters_saga'

//Export data
export default function* () {
    yield all([
        watchIsLogged(),
        watchLogin(),
        watchLoginFail(),
        watchLogout(),
        watchPostsGetAll(),
        watchPostDelete(),
        watchVoteChange(),
        watchOpenModalCreatePost(),
        watchCloseModalCreatePost(),
        watchFiltersChange(),
        watchFiltersGet(),
    ])
}