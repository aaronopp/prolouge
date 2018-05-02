import { SESSION_LOAD, SESSION_LOGIN } from '../actions';
import { createReducer } from './utils';

const initialState = {
  appId: 378391782635026,
  client_secret: 'e5ccfbb0213af84f1bf0038fcb245cc0',
  fields: 'name,email,picture',
  scopes: 'emailRemove,user_hometownRemove,user_postsRemove,user_age_rangeRemove,user_likesRemove,user_statusRemove,user_birthdayRemove,user_linkRemove,user_tagged_placesRemove,user_friendsRemove,user_locationRemove,user_videosRemove,user_genderRemove,user_photosRemove,ads_managementRemove,pages_manage_instant_articlesRemove,publish_to_groupsRemove,ads_readRemove,pages_messagingRemove,read_page_mailboxesRemove,business_managementRemove,pages_messaging_phone_numberRemove,user_eventsRemove,groups_access_member_infoRemove,pages_messaging_subscriptionsRemove,user_managed_groupsRemove,manage_pagesRemove,pages_show_listRemove,pages_manage_ctaRemove,publish_pagesRemove',
  accessToken: undefined,
  groups: []
};

const handlers = {
  [SESSION_LOAD]: (state, action) => action.payload,
  [SESSION_LOGIN]: (state, action) => {
    if (!action.error) {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        groups: action.payload.groups,
      };
    }
    return { error: action.payload.message };
  },
};

export default createReducer(initialState, handlers);
