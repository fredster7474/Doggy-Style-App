import { VOTE_COUNT } from '../actions/types'

const initialState = {
  affenpinscher: 0,
  beagle: 0,
  bullMastiff: 0,
  germanSheperd: 0,
  husky: 0,
  irishSetter: 0,
  komondor: 0,
  labradorRetriever: 0,
  maltese: 0,
  pomeranian: 0,
  pug: 0,
  saluki: 0,
  shihtzu: 0,
  welshSpaniel: 0
}

export default (state=initialState, { type, payload } = {}) => {
  switch (type) {
    case VOTE_COUNT:
      return state.payload += 1
  default:
      return state
  }
}
