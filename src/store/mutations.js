export const setMeName = (state, name) => {
  state.user.name = name
}

export const setPaused = (state, value) => {
  state.user.paused = value
}

export const setMuted = (state, value) => {
  state.user.muted = value
}

export const addPeer = (state, {video, peer}) => {
  state.clients.push({video, peer})
}

export const removePeer = (state, peer) => {
  state.clients = state.clients.filter((p) => {
    return p.peer.id !== peer.id
  })
}
