import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import {module3Types} from '../Modules/Module3/Redux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import module3Sags from '../Modules/Module3/Sagas'

/* ------------- Connect Types To Sagas ------------- */

const arr = [// some sagas only receive an action
  takeLatest(StartupTypes.STARTUP, startup)]
  .concat(module3Sags);
export default function* root() {
  yield arr
}
