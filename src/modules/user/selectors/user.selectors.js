import _ from 'lodash'

export const getUser = (state) => {
  return (state && !_.isEmpty(state.user))
}
