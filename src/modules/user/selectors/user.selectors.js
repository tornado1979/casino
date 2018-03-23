import _ from 'lodash'

export const getUser = (state) => {
  return (state && !_.isEmpty(state.user))
}

export const getUsername = (state) => state && state.user.username
